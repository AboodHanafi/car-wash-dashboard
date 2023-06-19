import axios, { AxiosResponse } from "axios";
type Config = Record<string, any>;
const baseApi = axios.create({
  baseURL: "https://car-wash.eltamiuz.net/api/dashboard/v1/",
});

const CRUDRequsests = {
  get: async (url: string, config: Config): Promise<AxiosResponse> => {
    return await baseApi.get(url, config);
  },
  post: async (url: string, config: Config): Promise<AxiosResponse> => {
    return await baseApi.post(url, config);
  },
};
export default CRUDRequsests;
