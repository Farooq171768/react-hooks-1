import React, { useEffect, useState } from 'react'

export const HookMouse = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    useEffect(()=>{
        console.log('useEffect is called')
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
            //this is a return function returned by the function that is first argument of the useEffect.
            //it is used to remove/detach the eventListeners of removed DOM elements
        }
    },[])

    const logMousePosition=(e)=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
            hooks X - {x}  Y - {y} 
        </div>
    )
}
