'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import AddCart from "./AddCart";

const ProductInfo = ({ data }) => {
    return (
        <div className="flex gap-6">
            <Image 
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
            />
            <div>
                <p className="font-semibold text-3xl">{data.title}</p>
                <p className="text-lg break-words">
                    <b>description</b> : {data.description}
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center p-2 gap-5">
                        <p>$ {data.price}</p>
                    </div>
                    <div className="flex items-center p-2">
                        <span className="flex items items-center">
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg> 
                            {data.rating.rate} out of 5
                        </span>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <p>{data.rating.count} reviews</p>
                    </div>
                </div>
                <AddCart 
                    image={data.image}
                    productId={data.id}
                    detail={data.title}
                    price={data.price}
                />
                <div className="flex gap-3">
                    category : 
                    <p className="text-gray-400 hover:text-black cursor-pointer">{data.category}</p>
                </div>
            </div>    
        </div>
    )
}

const ProductDetail = ({ id }) => {
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const [ product, setProduct ] = useState(null);
    const getProductDetail = async() => {
        try {
            const getdata = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const json = await getdata.json();
            setProduct(json)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getProductDetail();
    },[])
  return (
    <div className="p-6 flex justify-center">
        {product&&(
            <ProductInfo 
                data={product}
            />
        )}
    </div>
  )
}

export default ProductDetail