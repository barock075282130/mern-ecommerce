import { useCart } from "cart/lib/cart"

const AddCart = ({ productId, detail, price, image }) => {
  const { addToCart } = useCart();
  const addCart = (productId,detail,price, image) => {
    alert(`${detail} added`)
    try {
      addToCart({productId,detail,price, image})
    } catch (error) {
      alert('add cart false')
    }
  }
  return (
    <button 
      className="w-full py-2 bg-green-300 rounded-md hover:bg-green-600 hover:text-white duration-300 font-semibold"
      onClick={()=> addCart(productId,detail,price, image)}
    >
      Add to cart
    </button>
  )
}

export default AddCart