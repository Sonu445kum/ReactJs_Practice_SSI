import { createSlice } from '@reduxjs/toolkit';

// Ek slice = Redux state ka ek hissa (cartSlice, authSlice, counterSlice).
// Isme hota hai:
// Initial state
// Reducers (state update logic)
// Actions (jo call karne se reducer chale)
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
