import React,{useContext,useState} from 'react'
const AuthContext=React.createContext()

export function AuthProvider(props) {

const[user,setUser]=useState(null)
 const login=(user)=>{
    setUser(user)
 }

 const logout=()=>{
    setUser(null)
 }
  return (
    <div>
<AuthContext.Provider value={{user,login,logout}}>

{props.children}



</AuthContext.Provider>


    </div>
  )
}
export function useAuth(){
    return useContext(AuthContext)
}
