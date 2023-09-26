import { useCart } from "cart/lib/cart"

const AddCart = ({ productId, detail, price, image }) => {
  const { addToCart } = useCart();
  return (
    <button 
      className="w-full py-2 bg-green-300 rounded-md"
      onClick={()=> addToCart({productId,detail,price, image})}
    >
      Add to cart
    </button>
  )
}

export default AddCart