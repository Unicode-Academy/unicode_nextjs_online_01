export const setSession = async (key: string, data: unknown) => {
  const response = await fetch(`/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "update", key, data }),
  });
  return response.ok;
};

export const getSession = async () => {
  const response = await fetch(`/api/session`);
  const data = await response.json();
  return data;
};

export const deleteSession = async (key: string) => {
  const response = await fetch(`/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "delete", key }),
  });
  const data = await response.json();
  return data;
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
