import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { baseUrl, token } from '../utils/global-var';
type Nullable<T> = T | null;

interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  otp: string;
  status: number;
  created_at: string;
  updated_at: string;
  reservations_all: ReservationDetail[];
  reservations_count: number;
  reservations_done_count: number;
  reservations: ReservationItem[];
}

interface ReservationDetail {
  id: number;
  number: string;
  status: number;
  status_string: string;
  user_name: string;
  user_phone: string;
  lat: Nullable<string>;
  lon: Nullable<string>;
  car_brand: string;
  car_model: string;
  color: string;
  services: Service[];
  total: string;
  date: string;
  time: string;
  status_array: Status[];
  biker_name: string;
  rate: {
    star_num: number;
    notes: string;
  };
  payment_method: number;
  timer: number;
  updated_at: string;
  created_at: string;
}

interface Service {
  id: number;
  service_name: string;
  service_image: string;
  service_description: Nullable<string>;
  service_time: string;
  service_cost: string;
  qt: number;
}

interface Status {
  name: string;
  done: boolean;
}

interface ReservationItem {
  id: number;
  user_id: number;
  user_car_id: number;
  biker_id: number;
  status: number;
  payment_method: number;
  number: string;
  total: string;
  old_total: Nullable<string>;
  date: string;
  time: string;
  address_id: Nullable<number>;
  lat: Nullable<string>;
  lon: Nullable<string>;
  use_gift: number;
  coupon_id: Nullable<number>;
  size_id: Nullable<number>;
  pay_with_package_id: Nullable<number>;
  gift: string;
  gift_message: Nullable<string>;
  gift_phone: Nullable<string>;
  created_at: string;
  updated_at: string;
}

interface ResponseData {
  status: boolean;
  errNum: string;
  msg: string;
  data: Reservation[];
}

export type Employee = {
  id: number;
  name: string;
  address?: string;
  photo?: string;
};
export interface Employees {
  data: Employee[];
}

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: builder => ({
    fetchEmployees: builder.query<Employees, string>({
      query: () => {
        return {
          method: 'GET',
          url: 'bikers',
        };
      },
    }),
    fetchEmployeeById: builder.query({
      query: (id: string) => {
        return {
          method: 'GET',
          url: `bikers/${id}`,
        };
      },
    }),
    blockEmployeeById: builder.mutation({
      query: (id: string) => {
        return {
          method: 'POST',
          url: 'bikers/block/',
          body: JSON.stringify({
            biker_id: id,
            block: 0,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'json',
        };
      },
    }),
  }),
});

export const {
  useFetchEmployeesQuery,
  useFetchEmployeeByIdQuery,
  useBlockEmployeeByIdMutation,
} = employeesApi;
