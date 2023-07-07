import React, { useState } from 'react'

//1.Creating the component
export const HookCouter = () => {
    const [count,setCount]=useState(0) //It is  a function and it is combined step-2&3 in class component. useState(0)- Here 0 is default value of count state
    //The default value is never used on re-rendering
    //It is similar to this.state{count:0}. Here 'count' is state variable and setCount is used as an eventHandler to increment count
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}
