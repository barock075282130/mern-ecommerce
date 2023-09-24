'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Category = () => {
  const [ categories, setCategories ] = useState([]);
  const router = useRouter();
  const getCategory = async() => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const json = await res.json();
      setCategories(json)
    } catch (error) {
      console.log(error)
    }
  }
  const handleLink = (type) => router.push(`/products/categories?type=${type}`)
  useEffect(()=>{
    getCategory();
  },[])
  return (
    <nav className='py-2 px-6 bg-gray-200 text-black flex gap-3 justify-between'>
        {categories&&categories.map((data)=>(
          <button onClick={()=> handleLink(data)} key={data}>{data}</button>
        ))}
    </nav>
  )
}

export default Category