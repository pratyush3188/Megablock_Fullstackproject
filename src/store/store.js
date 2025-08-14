// store.js
import { configureStore } from '@reduxjs/toolkit';
import authslice from './authSlice'; // adjust the path if needed

const store = configureStore({
    reducer: {
        auth: authslice, // state.auth will hold status & userdata
    },
});

export default store;
