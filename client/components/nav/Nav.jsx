'use client'

import { UserContext } from "@components/auth/Context"
import Login from "@components/auth/Login"
import { useCart } from "cart"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useContext } from "react"

const Quantity = dynamic(()=> import("@components/cart/Quantity"),{ ssr: false })

const Nav = () => {
  const { user, Logout } = useContext(UserContext)
  const { cartItems } = useCart()
  return (
    <nav className="flex justify-between font-semibold fixed z-20 top-0 w-full p-4 bg-blue-300">
        <Link href='/'>Home</Link>
        <div className="flex gap-3 items-center">
          <Link href='/products'>All Products</Link>
          <Link href='/carts'>
            <div className="relative">
              <div 
                className="absolute z-10 w-6 flex justify-center h-6 rounded-full bg-red-600 text-white -top-3 -right-3"
              >
                <Quantity
                  items={cartItems}
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="fill-white drop-shadow-lg w-6 h-6 hover:fill-blue-600 duration-200">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              </svg>
            </div>
          </Link>
          {!user.userId ? (
            <Login />
          ):(
            <div className="flex gap-3">
              <p>{user.username}</p>
              <button onClick={Logout}>Logout</button>
            </div>
          )}
        </div>
    </nav>
  )
}

export default Nav