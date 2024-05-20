import { useNavigate } from "react-router-dom"

export default function Order() {
    const navigate=useNavigate()
  return (
    <div>
order is confirmed

<button onClick={()=>{navigate(-1)}}>go back</button>
    </div>
  )
}
