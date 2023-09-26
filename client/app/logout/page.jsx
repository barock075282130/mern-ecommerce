import Link from "next/link"

const page = () => {
  return (
    <div>
        <p>Logout Success</p>
        <Link href='/'>go back</Link>
    </div>
  )
}

export default page