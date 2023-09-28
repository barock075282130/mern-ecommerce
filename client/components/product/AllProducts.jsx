'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import CardSkeleton from "@components/skeleton/CardSkeleton";

const AllProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    const getProducts = async() => {
        setLoading(true)
        try {
            const get = await fetch('https://fakestoreapi.com/products')
            const json = await get.json()
            setProducts(json)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const gotoDetail = (id) => router.push(`/products/details?productId=${id}`)
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div className="grid grid-cols-4 gap-3 m-4">
        {loading ? (
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
                        key={data.id}
                        data={data}
                        gotoDetail={gotoDetail}
                    />
                </div>
            ))
        )}
    </div>
  )
}

export default AllProducts