export const getProfile = async (accessToken: string | undefined) => {
  if (!accessToken) return false;
  const response = await fetch(`${process.env.AUTH_SERVER_API}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
};

export const getNewToken = async (refreshToken: string) => {
  const response = await fetch(
    `${process.env.AUTH_SERVER_API}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    }
  );
  if (!response.ok) {
    return false;
  }
  return response.json();
};

export const getToken = async () => {
  const response = await fetch(`/api/auth/token`);
  const data = await response.json();
  return data;
};

export const saveToken = async (token: {
  access_token: string;
  refresh_token: string;
}) => {
  const response = await fetch(`/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });
  return response.ok;
};

export const removeToken = async () => {
  const response = await fetch(`/api/auth/token`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
