import React from 'react'
import ava1 from '../img/banner/banner1.png'
import { useContext,createContext, useState } from 'react'


export const UserAccountContext = createContext()

export const UserAccountProvider = (props) => {
    const [users] = useState([
        { id: 'admin', pass: "admin", gender: 'Nam', address: 'Ha Noi', ava: ava1, email: 'example@gmail.com' },
    ])


    return (
        <UserAccountContext.Provider value={{ users  : [...users] }}>
            {props.children}
        </UserAccountContext.Provider>
    )
}
