import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




export default function Login() {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[message,setMessage]=useState('')
  const navigate=useNavigate()

  const handleLogin=(e)=>{
      e.preventDefault()
      axios.get(`http://localhost:3003/customer/get/${email}`)
      .then(res=>{
          console.log(res)
          if(res.data[0]?.email){
           if(res.data[0]?.password === password){
              setMessage('')
                alert('Login successfull')
                navigate('/Services')
           }
           else{
              setMessage("Incorrect password")
           }
          }
          else{
              setMessage('Email not found')
          }

      })
      .catch(err=>console.log(err))
  }
return (
  <div>
    Login page
    <form onSubmit={handleLogin}>
      <label>Email</label><br></br>
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <label>Password</label><br></br>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <button type='submit'>Login</button>
    </form>
    {message}
  </div>
)
}
