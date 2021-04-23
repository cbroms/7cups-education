export const get = (key, fallback = null) => {
  const res = localStorage.getItem(key);
  if (res !== undefined) return JSON.parse(res);
  return fallback;
};

export const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
