import Image from "next/image"
import AddCart from "./action/AddCart"

const ProductCard = ({ 
    data,
    gotoDetail,
}) => {
  return (
    <div className="grid border p-4 rounded-lg h-72">
        <div className="flex justify-center items-center h-32">
            <Image 
                src={data.image}
                alt={data.title}
                width={0}
                height={0}
                onClick={()=> gotoDetail(data.id)}
                sizes="50vh"
                objectFit="contain"
                style={{ height: '80%', width: 'auto' }}
                className="cursor-pointer"
            />
        </div>
        <div className="grid items-center font-semibold">
            <span onClick={()=> gotoDetail(data.id)} className="cursor-pointer truncate">
                {data.title}
            </span>
        </div>
        <div className="flex justify-between items-center">
            <span className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg> 
                {data.rating.rate}
            </span>
            <span>
                $ {data.price}
            </span>
        </div>
        <div className="flex items-end">
            <AddCart 
                image={data.image}
                productId={data.id}
                detail={data.title}
                price={data.price}
            />
        </div>
    </div>
  )
}

export default ProductCard