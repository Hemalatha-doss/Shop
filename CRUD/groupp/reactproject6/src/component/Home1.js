import React, { useState } from 'react'
import axios from 'axios'
export default function Home1() {
    const[name,setName]=useState('')
    const handleSubmit=()=>{
        axios.get('http://localhost:3001/')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
   
  return (
    <div>
    <form>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}
