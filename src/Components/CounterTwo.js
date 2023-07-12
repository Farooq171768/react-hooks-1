import React from 'react'
import { useReducer } from 'react'

//This is an example for 'Action as an object'
const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            count - {count.firstCounter}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
