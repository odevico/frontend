import type { ContactFormValues } from '@/utils/validation';

// Placeholder submit handler. No data is sent or stored until a contact service is connected here.
export const submitContactRequest = async (values: ContactFormValues): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.info('Contact request (placeholder, not sent):', values);
};
