'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                    <div className="flex items-center p-2 gap-5">
                        <p>Like : {data.rating.count}</p>
                        <p>Rating : {data.rating.rate}</p>
                    </div>
                </div>
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