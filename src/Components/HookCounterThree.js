import React, { useState } from 'react'

export const HookCounterThree = () => {
    const [name,setName]=useState({ //useState does not have the capability of auto merging of fields of objects. So we use spread operator, make a copy of state variable and update that to original field
        firstName:'',
        lastName:''
    })
    return (
        <div>
            <form>
                <input type='text' value={name.firstName}
                onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type='text' value={name.lastName}
                onChange={e=>setName({...name,lastName:e.target.value})}/>
                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}
//useState does not automatically merge and update the object. this capability is there with setState of class component
//This is the key difference between setState which you come across in class component
//setState() will merge the state whereas useState() hook setter function will not
//You have to merge the state manually
//Use 'spread' operator to handle manual merging
//Copy every property in the name object and then just override firstName fields with different value