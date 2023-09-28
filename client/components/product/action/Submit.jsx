import { useRouter } from "next/navigation";

const Submit = ({ 
    info,
    total, 
    clear,
}) => {
    const router = useRouter();
    const submitOrder = async(userId) => {
        console.log(userId)
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
    const getUser = async() => {
        try {
            const res = await fetch('http://localhost:4000/userdata',{
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if(res.status !== 200){
                router.push('/login')
            }else{
                const json = await res.json()
                const userId = await json.userId
                submitOrder(userId)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
        <button 
            onClick={()=>getUser()} 
            className="bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300"
        >
            Submit
        </button>
    )
  }

export default Submit