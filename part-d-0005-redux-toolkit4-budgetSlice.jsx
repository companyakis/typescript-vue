import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    budget: 6550,
}

export const budgetSlice = createSlice({
    name: "budgetCounter",
    initialState,
    reducers: {
        incrementBudget: (state) => {
            state.budget += 100
        },
        decrementBudget: (state) => {
            state.budget -= 100
        }
    }
})

export const {incrementBudget, decrementBudget} = budgetSlice.actions

export default budgetSlice.reducer
