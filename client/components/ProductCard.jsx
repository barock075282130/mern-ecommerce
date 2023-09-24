import Image from "next/image"

const ProductCard = ({ 
    data,
    gotoDetail,
}) => {
  return (
    <div className="grid border p-4 rounded-lg cursor-pointer" onClick={()=> gotoDetail(data.id)}>
        <div className="flex justify-center items-center">
            <Image 
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
            />
        </div>
        <div className="grid">
            <p>{data.title}</p>
            <p>$ {data.price}</p>
        </div>
    </div>
  )
}

export default ProductCard