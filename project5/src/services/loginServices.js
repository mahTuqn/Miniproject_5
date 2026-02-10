import { get } from "../utils/request";

export const loginRequest = async (email, password) => {
  const res = await get(`users?email=${email}&password=${password}`);
  return res;
};
