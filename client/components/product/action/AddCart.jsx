import { useCart } from "cart"

const AddCart = ({ productId, detail, price, image }) => {
  const { addToCart } = useCart()
  return (
    <button 
      className="w-full py-2 bg-green-300 rounded-md hover:bg-green-600 hover:text-white duration-300 font-semibold"
      onClick={()=> addToCart({productId,detail,price, image})}
    >
      Add to cart
    </button>
  )
}

export default AddCart