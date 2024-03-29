import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

const UserContext = createContext()
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
       },[])
       const values = [
        user,setUser
    ]
  return (
    <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
  )
}

export const useUserContext = ()=> useContext(UserContext);