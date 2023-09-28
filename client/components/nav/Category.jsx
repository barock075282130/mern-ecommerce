'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Category = () => {
  const pathName = usePathname();
  const param = useSearchParams();
  const type = param.get('type')
  const router = useRouter();
  const handleLink = (type) => router.push(`/products/categories?type=${type}`)
  const active = "cursor-default bg-white pl-2 py-2 rounded-l-lg duration-300 font-semibold text-lg"
  const notActive = "cursor-pointer pl-2 py-2 rounded-l-lg duration-300"
  const linkData = [{
    link: 'electronics',
    name: 'electronics',
  },{
    link: 'jewelery',
    name: 'jewelery',
  },{
    link: "men's clothing",
    name: "men clothes",
  },{
    link: "women's clothing",
    name: "women clothes",
  },]
  return (
    <>
    {pathName !== '/'&& pathName !== '/carts' &&(
      <aside className='h-full top-14 w-40 fixed bg-blue-300 text-black'>
        <span className="flex justify-center font-semibold my-3">Category</span>
        <ul className="ml-3 grid gap-3">
          {linkData&&linkData.map((data)=>(
            <li 
              onClick={()=> handleLink(data.link)} 
              key={data.name} 
              className={type === data.link ? active : notActive}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </aside>
    )} 
    </>
  )
}

export default Category