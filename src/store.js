import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Components/ReduxToolkit/CounterSlice';

// 1. Store ka basic concept

// Redux ek state management library hai.

// State = data jo app ke andar use hota hai (user info, cart items, posts, etc).

// Agar state sirf ek component ke liye ho toh useState kaafi hai.

// Lekin jab state multiple components me share karni ho (jaise cart, authentication), toh ek central place chahiye hota hai jaha sari state rahe.

//  Yehi central jagah hota hai Redux Store.

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Store ka kaam

// Store ek container hai jo poore app ka global state rakhta hai.

// Uske andar tum slices ke reducers add karte ho.

// Har component Provider ke through store ke data ko access kar sakta hai
