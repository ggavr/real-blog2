import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./toolkitReducer"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})