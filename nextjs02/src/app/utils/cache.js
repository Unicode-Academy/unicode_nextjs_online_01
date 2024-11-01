export const clearCacheByPath = async (path) => {
  const response = await fetch(`/api/cache`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: path, type: "path" }),
  });
  return response.ok;
};
export const clearCacheByTag = async (tag) => {
  const response = await fetch(`/api/cache`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: tag, type: "tags" }),
  });
  return response.ok;
};
