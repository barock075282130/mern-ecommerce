'use client'

import { createContext, useEffect } from "react"
import { useState } from "react"

export const UserContext = createContext({ userId: undefined, username: undefined, auth: false })

const Provider = ({ children }) => {
    const [ user, setUser ] = useState({ userId: undefined, username: undefined, auth: true })
        const Logout = async() => {
            try {
                const res = await fetch('http://localhost:4000/logout',{
                    method: "POST",
                    headers: {
                        "authorization": "Bearer "+ localStorage.removeItem('token')
                    }
                })
                if(res.ok){
                    setUser({ auth: false })
                    window.location.reload(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        const getUser = async() => {
            try {
                const res = await fetch('http://localhost:4000/userdata',{
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    },
                    next: {
                        revalidate: 0
                    }
                })
                if(res.ok){
                    const json = await res.json()
                    setUser({ userId: json.userId, username: json.username, auth: true })
                }
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
            getUser()
        },[])
  return (
    <UserContext.Provider value={{ user, Logout }}>
        {children}
    </UserContext.Provider>
  )
}

export default Provider