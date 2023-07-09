import { createSlice } from '@reduxjs/toolkit';
import { token } from '../utils/global-var';

interface CounterState {
    isAuth: boolean;
}

const initialState: CounterState = {
    isAuth: !!token,
};

export const counterSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        authenticated: (state): void => {
            state.isAuth = true;
        },
        unAuthenticated: state => {
            state.isAuth = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { authenticated, unAuthenticated } = counterSlice.actions;

export default counterSlice.reducer;
