'use client';

import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter()
    const logout = async() => {
        try {
            const res = await fetch('http://localhost:4000/logout',{
                method: "POST",
                headers: {
                    "authorization": "Bearer "+ localStorage.removeItem('token')
                }
            })
            if(res.ok){
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button onClick={logout}>
        Logout
    </button>
  )
}

export default Logout