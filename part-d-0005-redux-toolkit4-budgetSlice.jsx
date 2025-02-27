import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    budget: 6550,
}

export const budgetSlice = createSlice({
    name: "budgetCounter",
    initialState,
    reducers: {
        incrementBudget: (state) => {
            state.value += 100
        },
        decrementBudget: (state) => {
            state.value -= 100
        }
    }
})

export const {incrementBudget, decrementBudget} = budgetSlice.actions

export default budgetSlice.reducer
