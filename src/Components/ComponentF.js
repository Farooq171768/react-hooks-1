import React, { useContext } from 'react'
import {  CountContext } from '../App'

export const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F - {countContext.countState}
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
            {/* <UserContext.Consumer>
            {
                user=> {
                    return(
                        <CompanyContext.Consumer>
                            {
                                company=><div>User Context value is {user} and Company context value is {company}</div>
                            }
                        </CompanyContext.Consumer>
                            )
                }
            }
            </UserContext.Consumer> */}
           
        </div>
    )
}
