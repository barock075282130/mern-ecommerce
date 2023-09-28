'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CardSkeleton from "@components/skeleton/CardSkeleton";

const CategoriesProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type')
    const getType = async() => {
        setLoading(true)
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${type}`)
            const json = await res.json();
            setProducts(json)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const gotoDetail = (id) => router.push(`/products/details?productId=${id}`)
    useEffect(()=>{
        getType();
    },[type])
  return (
    <div className="grid grid-cols-4 gap-3 m-4">
        { loading ? (
            <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </>
        ):(
            products&&products.map((data)=>(
                <div key={data.id}>
                    <ProductCard 
                        data={data}
                        gotoDetail={gotoDetail}
                    />
                </div>
            ))
        )}
    </div>
  )
}

export default CategoriesProducts