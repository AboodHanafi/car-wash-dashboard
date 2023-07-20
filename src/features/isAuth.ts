import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { token } from '../utils/global-var';

interface AuthState {
    isAuth: boolean;
    token: string;
}

const initialState: AuthState = {
    isAuth: !!token,
    token: '',
};

export const authSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        authenticated: (
            state,
            action: PayloadAction<Pick<AuthState, 'token'>>
        ): void => {
            state.isAuth = true;
            state.token = action.payload.token;
        },
        unAuthenticated: state => {
            state.isAuth = false;
            state.token = '';
        },
    },
});

// Action creators are generated for each case reducer function
export const { authenticated, unAuthenticated } = authSlice.actions;

export default authSlice.reducer;
