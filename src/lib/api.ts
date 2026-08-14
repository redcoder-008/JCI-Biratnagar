// Vite proxies this path locally. For deployments, set VITE_API_URL to the
// public backend URL, including its /api suffix.
const baseUrl = import.meta.env.VITE_API_URL || '/api';

export const api = async <T>(path: string, options: RequestInit = {}, token?: string): Promise<T> => {
  let response: Response;
  try {
    response = await fetch(`${baseUrl}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  } catch {
    throw new Error('Unable to reach the API. Start the backend or set VITE_API_URL to its public URL.');
  }
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) throw new Error(body?.message || 'Request failed.');
  return body as T;
};
