import React, { useEffect, useState } from 'react'

export const IntervalHookCounter = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        // function doSomething(){
        //     console.log(someProps)
        // }
        // doSomething()
        //If there are any function which are manipulating any states or props, better to define them inside useEffect 
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
    // function doSomething(){
    //     console.log(someProps)
    // }
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
