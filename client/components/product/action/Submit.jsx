import { UserContext } from "@components/auth/Context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Submit = ({ 
    info,
    total, 
    clear,
}) => {
    const { user, getUser } = useContext(UserContext)
    const router = useRouter();
    const submitOrder = async(userId) => {
        if(!userId){
            router.push('/login')
        }
        try {
            const res = await fetch('http://localhost:4000/order',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    order: info,
                    total: total,
                })
            })
            if(res.ok){
                clear()
                router.push('/products')
            }else{
                alert('failed')
            }
        } catch (error) {
            
        }
    }
  return (
        <>
            {!user.auth ? (
                <button 
                    onClick={()=>getUser()} 
                    className="bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300"
                >
                    Submit
                </button>    
            ):(
                <button 
                    onClick={()=>submitOrder(user.userId)} 
                    className="bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300"
                >
                    Submit
                </button>
            )}
        </>
    )
  }

export default Submit