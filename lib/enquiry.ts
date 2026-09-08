import { interests } from './content';
export type Enquiry = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  interest: string;
  consent: boolean;
};
export function prepareEnquiry(
  input: Enquiry,
):
  | { ok: true; draft: { url: string; body: string } }
  | { ok: false; error: string } {
  const fields = [
    'name',
    'email',
    'company',
    'phone',
    'message',
    'interest',
  ] as const;
  if (!input || fields.some((key) => typeof input[key] !== 'string'))
    return { ok: false, error: 'Please check your enquiry details.' };
  const d = {
    ...input,
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    phone: input.phone.trim(),
    message: input.message.trim(),
  };
  if (d.consent !== true)
    return {
      ok: false,
      error: 'Please confirm that PayMint may respond to your enquiry.',
    };
  if (
    !d.name ||
    d.name.length > 100 ||
    !/^\S+@\S+\.\S+$/.test(d.email) ||
    d.email.length > 200 ||
    d.company.length > 160 ||
    d.phone.length > 40 ||
    !d.message ||
    d.message.length > 1000 ||
    !interests.includes(d.interest)
  )
    return {
      ok: false,
      error: 'Please check the required fields and their length.',
    };
  const body = `South Africa enquiry: ${d.interest}\n\nName: ${d.name}\nEmail: ${d.email}${d.company ? '\nCompany: ' + d.company : ''}${d.phone ? '\nPhone: ' + d.phone : ''}\n\n${d.message}\n\nI agree to be contacted about this enquiry.`;
  return {
    ok: true,
    draft: {
      body,
      url: `mailto:info@paymint-eg.com?subject=${encodeURIComponent('PayMint South Africa — ' + d.interest)}&body=${encodeURIComponent(body)}`,
    },
  };
}
