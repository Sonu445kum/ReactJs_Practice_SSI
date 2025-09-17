import React, { useReducer } from 'react'

// create a counterReducers for the operations And It holds state And Actions
const counterReducers =(state,actions)=>{
    switch(actions.type){
        case 'Increment':
            return {count:state.count + 1};
        case 'Decrement':
            return {count:state.count -1};
        default:
            return state;
    }
}
export default function CounterWithReducers() {
    const [state,dispatch] =useReducer(counterReducers ,{count:0});
  return (
    <div>
        <h1>CounterWithReducers</h1>
        <h2>Count Value:{state.count}</h2>
        <button onClick={()=>dispatch({type:'Increment'})}>Incrment</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
    </div>
  )
}
