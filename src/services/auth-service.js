import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const login = async (payload) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
