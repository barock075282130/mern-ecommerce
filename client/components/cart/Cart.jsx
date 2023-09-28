'use client';

import { useCart } from "cart";
import Image from "next/image";
import Submit from "../product/action/Submit";

const PriceResult = ({ items, clear }) => {
  let totalPrice = 0;
  for (const x of items) {
    const data = {
      price: x.price * x.quantity,
    };
    totalPrice += data.price;
  }
    return (
    <div className="flex gap-5 my-4 items-center">
        <span>total $ {totalPrice.toFixed(2)}</span>
        <Submit 
            info={items}
            total={totalPrice}
            clear={clear}
        />
    </div>
  );
};

const Cart = () => {
    const { addToCart, cartItems, clearCart, decreaseItem } = useCart();
    return (
        <div className="my-5 mx-28">
            <div>
            {cartItems.length === 0 ? (
                <div className="flex justify-center font-semibold text-3xl">
                    No Item
                </div>
            ):(
                <>
                <table className="w-full border">
                    <caption>Shopping Cart</caption>
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems && cartItems.map((data) => (
                        <tr key={data.productId} className="text-center border h-16">
                            <th scope="row" className="flex justify-center pt-2">
                                <Image
                                    src={data.image}
                                    alt={data.image}
                                    width={0}
                                    height={0}
                                    objectFit="contain"
                                    sizes="50vh"
                                    style={{ height: "50px", width: "auto" }}
                                />
                            </th>
                            <td>{data.detail}</td>
                            <td>
                                <button
                                    className="p-3 bg-blue-300"
                                    onClick={() => addToCart(data)}
                                    aria-label="Add to Cart"
                                    type="button"
                                >
                                    +
                                </button>
                                <span className="mx-5">{data.quantity}</span>
                                <button
                                    className="p-3 bg-gray-300"
                                    onClick={() => decreaseItem(data.productId, 1)}
                                    aria-label="Remove from Cart"
                                    type="button"
                                >
                                    -
                                </button>
                            </td>
                            <td className="text-center">{data.price}</td>
                            <td>
                                <button
                                    onClick={() => decreaseItem(data.productId, data.quantity)}
                                    aria-label="Remove Item"
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-red-600 hover:fill-red-300 duration-200 w-6 h-6">
                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end items-center gap-5">
                    <button
                        className="bg-gray-200 px-6 rounded-lg py-1 hover:bg-gray-600 hover:text-white duration-0"
                        onClick={() => clearCart()}
                    >
                        Clear
                    </button>
                    <PriceResult items={cartItems} clear={clearCart}/>
                </div>
                </>
            )}
            </div>
        </div>
    );
};

export default Cart;
