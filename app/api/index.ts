import axios, { AxiosResponse } from "axios";
import { IUserResponse } from "~/interfaces/user";

export const getUserData = (): Promise<AxiosResponse<IUserResponse>> => {
  return axios.get("https://randomuser.me/api");
};
