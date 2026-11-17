import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Check, LoaderCircle } from 'lucide-react';
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useForm } from '@formspree/react';
import Button from '@/components/common/Button';
import CloudflareTurnstile, { type CloudflareTurnstileHandle } from '@/components/common/CloudflareTurnstile';
import { FORMSPREE_FORM_ID, TURNSTILE_SITE_KEY } from '@/utils/contactRequest';
import { cn } from '@/utils/classNames';
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/utils/validation';

const emptyValues: ContactFormValues = { name: '', email: '', company: '', subject: '', message: '' };

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'w-full rounded-2xl border bg-canvas px-4 py-3.5 text-sm text-paper placeholder:text-mute/60 transition-colors duration-300 focus:border-accent focus:outline-none';

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: keyof ContactFormValues;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`contact-${name}`} className="text-sm font-medium text-paper/90">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`contact-${name}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-accent"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [formspreeState, submitToFormspree, resetFormspree] = useForm<Record<string, string>>(
    FORMSPREE_FORM_ID,
  );
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const turnstileRef = useRef<CloudflareTurnstileHandle>(null);

  useEffect(() => {
    if (!formspreeState.succeeded) return;
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
  }, [formspreeState.succeeded]);

  useEffect(() => {
    if (!formspreeState.succeeded && !formspreeState.errors) return;
    turnstileRef.current?.reset();
    setTurnstileToken(null);
  }, [formspreeState.succeeded, formspreeState.errors]);

  const status: SubmitStatus = formspreeState.submitting
    ? 'submitting'
    : formspreeState.succeeded
      ? 'success'
      : formspreeState.errors
        ? 'error'
        : 'idle';

  const getFieldError = (name: keyof ContactFormValues): string | undefined => {
    if (errors[name]) return errors[name];
    return formspreeState.errors?.getFieldErrors(name)[0]?.message;
  };

  const formError = formspreeState.errors?.getFormErrors()[0]?.message;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (submitted) setErrors(validateContactForm(nextValues));
    if (!formspreeState.submitting && (formspreeState.succeeded || formspreeState.errors)) {
      resetFormspree();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!turnstileToken) {
      setTurnstileError('Please complete the verification before sending.');
      return;
    }

    void submitToFormspree(event);
  };

  const fieldProps = (name: keyof ContactFormValues) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(getFieldError(name)),
    'aria-describedby': getFieldError(name) ? `contact-${name}-error` : undefined,
    className: cn(inputClasses, getFieldError(name) ? 'border-accent' : 'border-line'),
    disabled: status === 'submitting',
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-panel border border-line/70 bg-card p-6 sm:p-10">
      <input type="hidden" name="_subject" value={`Website inquiry: ${values.subject || 'New contact request'}`} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" error={getFieldError('name')}>
          <input type="text" autoComplete="name" placeholder="Your full name" {...fieldProps('name')} />
        </Field>
        <Field label="Work email" name="email" error={getFieldError('email')}>
          <input type="email" autoComplete="email" placeholder="you@company.com" {...fieldProps('email')} />
        </Field>
        <Field label="Company" name="company" error={getFieldError('company')}>
          <input type="text" autoComplete="organization" placeholder="Company name" {...fieldProps('company')} />
        </Field>
        <Field label="Subject" name="subject" error={getFieldError('subject')}>
          <input type="text" placeholder="How can we help?" {...fieldProps('subject')} />
        </Field>
      </div>

      <Field label="Message" name="message" error={getFieldError('message')}>
        <textarea
          rows={5}
          placeholder="Tell us about your languages, volume, and workflow."
          {...fieldProps('message')}
          className={cn(inputClasses, 'resize-y', getFieldError('message') ? 'border-accent' : 'border-line')}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <CloudflareTurnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          theme="dark"
          onVerify={(token) => {
            setTurnstileToken(token);
            setTurnstileError(null);
          }}
          onExpire={() => {
            setTurnstileToken(null);
            setTurnstileError('Verification expired. Please complete it again.');
          }}
          onError={() => {
            setTurnstileToken(null);
            setTurnstileError('Verification could not be loaded. Please refresh the page and try again.');
          }}
        />
        {turnstileError && (
          <p role="alert" className="text-xs text-accent">
            {turnstileError}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="min-h-5 text-sm">
          {status === 'success' && (
            <span className="inline-flex items-center gap-2 text-paper">
              <Check className="h-4 w-4 text-accent" /> Thank you. Your message has been received.
            </span>
          )}
          {status === 'error' && (
            <span className="inline-flex items-center gap-2 text-accent">
              <AlertCircle className="h-4 w-4" /> {formError ?? 'Something went wrong. Please try again.'}
            </span>
          )}
        </p>

        <Button
          type="submit"
          disabled={status === 'submitting' || !turnstileToken}
          className="w-full sm:w-auto sm:min-w-[180px]"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  );
}
