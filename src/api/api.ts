// services/api.ts

import { API_BASE_URL } from './services/apiConfig';

export async function fetchApi(url: string) {
  const fullUrl = `${API_BASE_URL}${url}`;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function fetchDomains() {
  const response = await fetchApi('/Admin/GetAllDomains');
  return response;
}