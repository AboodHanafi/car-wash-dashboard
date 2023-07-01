import { configureStore } from '@reduxjs/toolkit';
import { reservationsApi } from '../services/reservations';

export const store = configureStore({
  reducer: {
    [reservationsApi.reducerPath]: reservationsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(reservationsApi.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  useFetchReservationsQuery,
  useFetchReservationByIdQuery,
  useDeleteReservationMutation,
} from '../services/reservations';
