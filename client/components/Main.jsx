'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const Main = () => {
  const [ list, setList ] = useState([]);
  // const getImage = async() => {
  //   try {
  //     const image = await fetch('https://fakestoreapi.com/products/1')
  //     const json = await image.json()
  //     setList(json)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   getImage()
  // },[])
  return (
      <div className='flex justify-center items-center p-4'>
        Home Page
      </div>
  )
}

export default Main