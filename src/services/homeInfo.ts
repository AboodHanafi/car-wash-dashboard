import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { baseUrl, token } from '../utils/global-var';

interface Reservation {
  id: number;
  number: string;
  status: number;
  status_string: string;
  user_name: string;
  user_phone: string;
  lat: string;
  lon: string;
  car_brand: string;
  car_model: string;
  color: string;
  services: Service[];
  total: string;
  date: string;
  time: string;
  status_array: StatusItem[];
  biker_name: string;
  rate: Rate;
  payment_method: number;
  timer: number;
  updated_at: string;
  created_at: string;
}

interface Service {
  id: number;
  service_name: string;
  service_image: string;
  service_description: string | null;
  service_time: string;
  service_cost: string;
  qt: number;
}

interface StatusItem {
  name: string;
  done: boolean;
}

interface Rate {
  star_num: number;
  notes: string;
}

interface Data {
  reservations_count: number;
  reservations_current: number;
  reservations_previous: number;
  payments: string;
  reservations: Reservation[];
}

interface Response {
  status: boolean;
  errNum: string;
  msg: string;
  data: Data;
}

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    fetchHomeInfo: builder.query<Response, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'home',
        };
      },
    }),
  }),
});

export const { useFetchHomeInfoQuery } = homeApi;