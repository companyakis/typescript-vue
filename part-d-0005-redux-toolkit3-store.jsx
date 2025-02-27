import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from '../redux/budgetSlice';

export const store = configureStore({
    reducer: {
        budgetCounter: budgetReducer,
    },
})
