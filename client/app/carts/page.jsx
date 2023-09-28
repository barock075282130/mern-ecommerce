import dynamic from "next/dynamic"
const Cart = dynamic(()=>import('@components/cart/Cart'), { ssr: false })

const page = () => {
  return (
    <div className="w-screen pt-16">
      <Cart />
    </div>
  )
}

export default page