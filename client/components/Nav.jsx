import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-300">
        <Link href='/'>Home</Link>
        <div className="flex gap-3">
          <Link href='/products'>Products</Link>
          <Link href='/carts'>Cart</Link>
        </div>
    </nav>
  )
}

export default Nav