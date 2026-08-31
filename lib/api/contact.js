import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hutaib.admin.simboz.website';

export async function submitContactQuery(formData) {
  const url = `${API_BASE_URL}/api/contact-queries/contact`;
  const res = await axios.post(url, formData);
  return res.data;
}

export async function submitCareerApplication(formData) {
  const url = `${API_BASE_URL}/api/contact-queries/careers`;
  const res = await axios.post(url, formData);
  return res.data;
}
