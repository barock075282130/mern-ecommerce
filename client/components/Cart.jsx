"use client";

import { useCart } from "cart";
import Image from "next/image";
import Submit from "./Submit";

const PriceResult = ({ items, clear }) => {
  let totalPrice = 0;
  for (const x of items) {
    const data = {
      price: x.price * x.quantity,
    };
    totalPrice += data.price;
  }
    return (
    <div>
        <Submit 
            info={items}
            total={totalPrice}
            clear={clear}
        />
        <span>total $ {totalPrice.toFixed(2)}</span>
    </div>
  );
};

const Cart = () => {
    const { addToCart, cartItems, clearCart, decreaseItem } = useCart();
    return (
        <div className="mx-10 my-5">
        <div>
            <table className="w-full">
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
                {cartItems &&
                cartItems.map((data) => (
                    <tr key={data.productId} className="text-center">
                    <th className="flex justify-center">
                        <Image
                        src={data.image}
                        alt={data.image}
                        width={100}
                        height={100}
                        />
                    </th>
                    <td>{data.detail}</td>
                    <td>
                        <button className="p-3" onClick={() => addToCart(data)}>
                        +
                        </button>
                        {data.quantity}
                        <button
                        className="p-3"
                        onClick={() => decreaseItem(data.productId, 1)}
                        >
                        -
                        </button>
                    </td>
                    <td className="text-center">{data.price}</td>
                    <td>
                        <button
                        onClick={() =>
                            decreaseItem(data.productId, data.quantity)
                        }
                        >
                        ลบ
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className="flex justify-end items-center gap-5">
            <button
            className="bg-gray-200 px-6 rounded-lg py-2"
            onClick={() => clearCart()}
            >
            Clear
            </button>
            <PriceResult items={cartItems} clear={clearCart}/>
        </div>
        </div>
    );
};

export default Cart;
