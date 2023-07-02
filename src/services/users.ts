import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { baseUrl, token } from '../utils/global-var';

export interface User {
  id: number;
  name: string;
  phone: string;
  reservations_count: number;
  payments?: number;
}

export interface Users {
  data: User[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: builder => ({
    fetchUsers: builder.query<Users, void>({
      query: () => {
        return {
          method: 'GET',
          url: 'users',
        };
      },
    }),
    fetchUserById: builder.query({
      query: (id: number) => {
        return {
          method: 'GET',
          url: `users/${id}`,
        };
      },
    }),
    deleteUserById: builder.mutation({
      query: (id: number) => {
        return {
          method: 'POST',
          url: 'users',
          body: JSON.stringify({
            user_id: id,
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
  useFetchUsersQuery,
  useFetchUserByIdQuery,
  useDeleteUserByIdMutation,
} = usersApi;
