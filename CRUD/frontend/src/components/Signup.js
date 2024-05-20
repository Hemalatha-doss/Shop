import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


export default function Signup() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate=useNavigate()
const handleSubmit=()=>{
    axios.post('http://localhost:3002/customer/post',{
        name,email,password
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navigate('/Login')
}
    return (
        <div>Signup

<form onSubmit={handleSubmit}>
<label>Name:</label>
<input type='text'value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
<label>Email:</label><br></br>
<input type='email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
<label>Password:</label><br></br>
<input type='password'value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
<br></br>
<button type='submit' >Sign up</button>
</form>

        </div>
    )
}


// import React, { useEffect,useState } from 'react' 
// import axios from 'axios'

// export default function Signup() {
//     const [item,setItem]=useState({})

//     useEffect(()=>{
//         axios.get('http://localhost:3002/users')
//     .then(res=>setItem(res.data))
//     .catch(err=>console.log(err))
// },[])
// console.log(item)
//   return (
//     <div>
//         <h1>{JSON.stringify(item)}</h1>
//     </div>
//   )
// }
