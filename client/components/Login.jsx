'use client';

import { useRef } from "react";

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const handleLogin = async(e) => {
        e.preventDefault();
        const username = userRef.current.value
        const password = passRef.current.value
        try {
            const login = await fetch('http://localhost:4000/login',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
            const res = await login.json();
            if(login.ok){
                localStorage.setItem("token", res.token)
            }
        } catch (error) {
            console.log('login failed')
        }
    }
  return (
    <div className="flex justify-center">
        <form onSubmit={handleLogin} className="grid">
            username: <input type="text" name="username" ref={userRef} />
            password: <input type="text" name="password" ref={passRef} />
            <button>login</button>
        </form>
    </div>
  )
}

export default Login