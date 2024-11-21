import { deleteSession } from "./session";
import { getNewToken, getToken, removeToken, saveToken } from "./utils";

type ClientType = {
  baseUrl: string;
  headers?: HeadersInit;
};
export const HttpClient = {
  baseUrl: "",
  headers: {},
  requestConfig: null,
  responseConfig: null,
  create: function ({ baseUrl, headers }: ClientType) {
    this.baseUrl = baseUrl;
    this.headers = headers || {};
    return { ...this };
  },
  send: async function (
    path: string,
    method = "GET",
    body: { [key: string]: string } | null = null,
    headers = {}
  ): Promise<unknown> {
    const headerCombined = { ...this.headers, ...headers };
    let requestInit: RequestInit = {
      method,
      headers: headerCombined,
    };
    if (body) {
      (requestInit as RequestInit).body = JSON.stringify(body);
    }

    if (typeof this.requestConfig === "function") {
      requestInit = await (
        this.requestConfig as (callback: RequestInit) => Promise<RequestInit>
      )(requestInit);
    }

    let response: Response = await fetch(`${this.baseUrl}${path}`, requestInit);

    if (typeof this.responseConfig === "function") {
      response = await (
        this.responseConfig as (response: Response) => Promise<Response>
      )(response);
    }
    if (response.constructor?.name !== "Response") {
      return this.send(path, method, body, headers);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  },
  request: function (callback: (config: RequestInit) => Promise<RequestInit>) {
    if (typeof callback !== "function") return;
    (this.requestConfig as unknown) = callback;
  },
  response: function (callback: (config: Response) => Promise<unknown>) {
    if (typeof callback !== "function") return;
    (this.responseConfig as unknown) = callback;
  },
  get: async function (path: string, headers = {}) {
    return this.send(path, "GET", null, headers);
  },
  post: async function (
    path: string,
    body: { [key: string]: string },
    headers = {}
  ) {
    return this.send(path, "POST", body, headers);
  },
  put: async function (
    path: string,
    body: { [key: string]: string },
    headers = {}
  ) {
    return this.send(path, "PUT", body, headers);
  },
  patch: async function (
    path: string,
    body: { [key: string]: string },
    headers = {}
  ) {
    return this.send(path, "PATCH", body, headers);
  },
  delete: async function (path: string, headers = {}) {
    return this.send(path, "DELETE", null, headers);
  },
};

export const jsonplaceholderClient = HttpClient.create({
  baseUrl: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authClient = HttpClient.create({
  baseUrl: `${process.env.AUTH_SERVER_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});
export const client = HttpClient.create({
  baseUrl: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});
authClient.request(async function (config: RequestInit) {
  //Tùy chỉnh request
  const token = await getToken();
  if (token.success) {
    config.headers = config.headers as { [key: string]: string };
    config.headers.Authorization = `Bearer ${token.data.access_token}`;
  }
  return config;
});

authClient.response(async function (config: Response) {
  //Tùy chỉnh response
  // - Lấy được response status
  // - Thiết lập gọi lại request

  if (config.status === 401) {
    //Gọi API /refresh token
    let refreshTokenPromise = null;
    const token = await getToken();
    if (token.success) {
      const refreshToken = token.data.refresh_token;
      if (!refreshTokenPromise) {
        refreshTokenPromise = getNewToken(refreshToken);
      }
      const newToken = await refreshTokenPromise;
      if (!newToken) {
        await deleteSession("user");
        await removeToken(); //Xóa token trong cookie

        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return;
      }
      await saveToken(newToken);
      //Yêu cầu hàm send gọi lại request bị field
      return authClient;
    }
  }

  return config;
});

export const adminClient = HttpClient.create({
  baseUrl: process.env.API_SERVER as string,
  headers: {
    "Content-Type": "application/json",
  },
});

adminClient.request(async function (config: RequestInit) {
  //Tùy chỉnh request
  const token = await getToken();
  if (token.success) {
    config.headers = config.headers as { [key: string]: string };
    config.headers.Authorization = `Bearer ${token.data.access_token}`;
  }
  return config;
});
