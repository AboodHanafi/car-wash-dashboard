import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { baseUrl, token } from '../utils/global-var';

type Reservation = {
  id: number;
  total: string;
  user_name: string;
  user_phone: string;
  created_at: string;
  timer: number;
  time: string;
  biker_name: string;
  status: number;
  status_string: string;
  car_brand: string;
  car_model: string;
  color: string;
  services: {
    service_name: string;
    service_time: string;
    service_cost: string;
  }[];
  rate: {
    star_num: number;
    notes: string;
  };
};
type SingleRes = {
  data: Reservation;
  status: boolean;
  errNum: string;
  msg: string;
};
export type Reservations = {
  data: Reservation[];
};
export const reservationsApi = createApi({
  reducerPath: 'reservationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: builder => ({
    fetchReservations: builder.query<Reservations, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'reservations',
        };
      },
    }),
    fetchReservationById: builder.query<SingleRes, String>({
      query: (id: string) => {
        return {
          method: 'GET',
          url: `reservations/${id}`,
        };
      },
    }),
    deleteReservationById: builder.mutation({
      query: (id: number) => {
        return {
          method: 'POST',
          url: 'reservations/destroy/',
          body: JSON.stringify({
            reservation_id: id,
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
  useFetchReservationsQuery,
  useFetchReservationByIdQuery,
  useDeleteReservationByIdMutation,
} = reservationsApi;
