import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice.js';

console.log(counterSlice);

export const store = configureStore({
    reducer: {
        counterReducer: counterSlice,
    },
});

export default store;