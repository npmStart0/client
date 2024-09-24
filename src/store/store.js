import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userReducer';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});