import Link from "next/link"
import Logout from "./Logout"

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-300">
        <Link href='/'>Home</Link>
        <div className="flex gap-3">
          <Link href='/products'>Products</Link>
          <Link href='/login'>Login</Link>
          <Logout />
          <Link href='/register'>Register</Link>
        </div>
    </nav>
  )
}

export default Nav