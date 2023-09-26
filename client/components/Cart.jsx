'use client';

import { useCart } from "cart";
import Image from "next/image";

const HandleSubmit = ({items}) => {
    let totalPrice = 0;
    for(const x of items){
        const data = {
            price: x.price * x.quantity
        }
        totalPrice += data.price
    }
    return (
        <span>
            total $ {totalPrice.toFixed(2)}
        </span>
    )
}

const Cart = () => {
    const { addToCart, cartItems, clearCart, decreaseItem } = useCart();
  return (
    <div className="flex justify-center">
        <div>
            <div>
                <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="row"></th>
                                    <th scope="row">สินค้า</th>
                                    <th scope="row">จำนวน</th>
                                    <th scope="row">ราคา</th>
                                    <th scope="row"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems&&cartItems.map((data)=>(
                                    <tr key={data.id}>
                                        <td>
                                            <Image 
                                                src={data.image}
                                                alt={data.image}
                                                width={50}
                                                height={50}
                                            />
                                        </td>
                                        <td>{data.detail}</td>
                                        <td>
                                            <button className="p-3" onClick={() => addToCart(data)}>+</button>
                                                {data.quantity} 
                                            <button className="p-3" onClick={() => decreaseItem(data.productId, 1)}>-</button>
                                        </td>
                                        <td className="text-center">{data.price}</td>
                                        <td><button onClick={()=> decreaseItem(data.productId,data.quantity)}>ลบ</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
                <span className="flex justify-between">
                    <button className="bg-gray-200 px-6 rounded-lg py-2" onClick={() => clearCart()}>Clear</button>
                    <HandleSubmit items={cartItems} />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Cart