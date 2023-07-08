import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../utils/global-var';

type Login = { email: string; password: string };

interface LoginResponse {
    status: boolean;
    errNum: string;
    msg: string;
    data: {
        name: string;
        email: string;
        profile_image: string;
        api_token: string;
    };
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, Login>({
            query: body => {
                return {
                    method: 'POST',
                    url: 'login',
                    body,
                };
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
