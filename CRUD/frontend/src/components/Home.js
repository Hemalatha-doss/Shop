import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {

  const navigate=useNavigate()
  return (
    <div>Home
<button onClick={()=>{navigate('/Login',{replace:true})}}>Book Services</button>




    </div>
  )
}
