import React, { useReducer } from 'react'
// here i m create the initial State of the useReducers
const initialState = { name: "Sonu", age: 0, Submitted: false };

// here i m created the fromReducers of the useReduces so that i can define the operations
const formReducers = (state, action) => {
    switch (action.type) {
        // creating the Different Case
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_AGE':
            return { ...state, age: action.payload };
        case 'SUBMIT':
            return { ...state, Submitted: true };
        default:
            return state;

    }
}
export default function FormReducers() {
    // create here the useReducers which store the fromReducers And initialState
    const [state, dispatch] = useReducer(formReducers, initialState);
    // create a handleSubmit Functions to handle the submit button
    const handleSubmit = (e) => {
        dispatch({ type: 'SUBMIT' });

    }
    return (
        <div>
            <h1>FormReducers</h1>
            {/* Name */}
            <input type="text" value={state.name} placeholder='Enter Your Name:'
                onChange={(e) => dispatch({
                    type: 'SET_NAME', payload: e.target.value
                })}
            />
            {/* Age */}
            <input type="number" value={state.age} placeholder='Enter Your Age:'
                onChange={(e) => dispatch({ type: 'SET_AGE', payload: e.target.value })}

            />
            {/* Submit Button */}
            <button onClick={handleSubmit}>Submit</button>
            {state.Submitted && <p>Form Submitted</p>}

        </div>
    )
}
