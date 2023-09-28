'use client';

import { useRef } from "react";

const RegisterForm = () => {
    const userRef = useRef();
    const passRef = useRef();
    const sendPass = async(e) => {
      e.preventDefault();
      const usernameRef = userRef.current.value;
      const passwordRef = passRef.current.value;
      try {
        await fetch("http://localhost:4000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: usernameRef,
            password: passwordRef,
          }),
        });
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="flex justify-center">
        <form onSubmit={sendPass} className="grid">
          username: <input type="text" name="username" ref={userRef} />
          password: <input type="text" name="password" ref={passRef} />
          <button className="p-3 bg-green-500 my-2">register</button>
        </form>
    </div>
  )
}

export default RegisterForm