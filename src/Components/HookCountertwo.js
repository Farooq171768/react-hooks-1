import React, { useState } from 'react'

export const HookCountertwo = () => {
    const initialCount=0
    //In function state can be anything, but in class it is only a object
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}
