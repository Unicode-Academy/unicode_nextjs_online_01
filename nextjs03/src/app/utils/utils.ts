export const getProfile = async (token: string | undefined) => {
  if (!token) return false;
  const response = await fetch(`${process.env.AUTH_SERVER_API}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
};

export const getToken = async () => {
  const response = await fetch(`/api/auth/token`);
  const data = await response.json();
  return data;
};

export const removeToken = async () => {
  const response = await fetch(`/api/auth/token`, {
    method: "POST",
  });
  const data = await response.json();
  return data;
};
