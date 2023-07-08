import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    isAuth: boolean;
}

const initialState: CounterState = {
    isAuth: false,
};

export const counterSlice = createSlice({
    name: 'counter',
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
