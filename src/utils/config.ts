export const config = {
  apiBaseUrl: import.meta.env.PROD ? '/api' : 'http://localhost:8888/.netlify/functions',
  pinterestClientId: import.meta.env.VITE_PINTEREST_CLIENT_ID || '1507772',
  pinterestRedirectUri: import.meta.env.PROD 
    ? `${window.location.origin}/callback`
    : 'http://localhost:5173/callback'
};