const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, Math.random() * 1000);
  });
};
let token = "My Token";
let isExpire = false;
let refreshTokenPromise = null;
const callApi = async (url) => {
  if (url === `/best-seller`) {
    isExpire = true;
  }
  if (isExpire) {
    //Gọi refresh token
    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshToken();
    }
    const newToken = await refreshTokenPromise;
    token = newToken;
  }

  console.log(`Call API: ${url}`, `Token: ${token}`);
};

callApi(`/slide`);
callApi(`/best-seller`);
callApi(`/new-product`);
callApi(`/posts`);
