import React from 'react'
import { ComponentF } from './ComponentF'
//1. importing useContext
import { useContext } from 'react'
//2. import other context APIs
import { UserContext,CompanyContext } from '../App'

export const ComponentE = () => {
    // const user=useContext(UserContext)
    // const company= useContext(CompanyContext)
    return (
        <div>
            <ComponentF/>
            {/* {user} - {company} */}
        </div>
    )
}
