'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AuthPage = () => {
    const [ userAuth, setUserAuth ] = useState(null);
    const router = useRouter();
    const auth = async() => {
      try {
        const res = await fetch('http://localhost:4000/auth',{
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        const json = await res.json()
        setUserAuth(json)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      auth()
    },[])
  return (
    <div>
        {userAuth&&(
            <>
            Hello {userAuth.username}
            </>
        )}
    </div>
  )
}

export default AuthPage