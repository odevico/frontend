export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: string) => EMAIL_PATTERN.test(value.trim());

export const validateContactForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your work email.';
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.company.trim()) errors.company = 'Please enter your company name.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  else if (values.message.trim().length < 20) errors.message = 'Please share at least 20 characters.';

  return errors;
};
