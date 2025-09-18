import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';

export default function CounterRTK() {
 // useSelector: store se state read karne ke liye.
// useDispatch: actions ko dispatch (trigger) karne ke liye.
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>This is a Example Of Redux Tool Kit or Redux</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
}
