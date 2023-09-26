import Image from "next/image"
import AddCart from "./AddCart"

const ProductCard = ({ 
    data,
    gotoDetail,
}) => {
  return (
    <div className="grid border p-4 rounded-lg">
        <div className="flex justify-center items-center">
            <Image 
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
                onClick={()=> gotoDetail(data.id)}
                className="cursor-pointer"
            />
        </div>
        <div className="grid">
            <span onClick={()=> gotoDetail(data.id)} className="cursor-pointer">{data.title}</span>
            <p>$ {data.price}</p>
        </div>
        <AddCart 
            image={data.image}
            productId={data.id}
            detail={data.title}
            price={data.price}
        />
    </div>
  )
}

export default ProductCard