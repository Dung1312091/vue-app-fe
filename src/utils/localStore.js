export const localStore = {
  ACCESS_TOKEN: 'access-token'
};
export const setHeader = () => {
  let headers = {};
  headers['Content-Type'] = 'application/json';
  headers['accept'] = 'application/json';
  const token = localStorage.getItem(localStore.ACCESS_TOKEN);
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};
export function getToken() {
  return localStorage.getItem(localStore.ACCESS_TOKEN);
}
