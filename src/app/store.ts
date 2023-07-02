import { configureStore } from '@reduxjs/toolkit';
import { reservationsApi } from '../services/reservations';
import { employeesApi } from '../services/employees';
import { usersApi } from '../services/users';

export const store = configureStore({
  reducer: {
    [reservationsApi.reducerPath]: reservationsApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(reservationsApi.middleware)
      .concat(employeesApi.middleware)
      .concat(usersApi.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  useFetchReservationsQuery,
  useFetchReservationByIdQuery,
  useDeleteReservationByIdMutation,
} from '../services/reservations';

export {
  useFetchEmployeesQuery,
  useFetchEmployeeByIdQuery,
  useBlockEmployeeByIdMutation,
} from '../services/employees';

export {
  useFetchUsersQuery,
  useFetchUserByIdQuery,
  useDeleteUserByIdMutation,
} from '../services/users';
