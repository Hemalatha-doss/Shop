import React from 'react'
import { useAuth } from './auth'
import { NavLink } from 'react-router-dom'
export default function Nav() {

  const auth=useAuth()
  return (
    <nav className='header-nav'>
      
       <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>services</NavLink>
        <NavLink to='/products'>products</NavLink>
        <NavLink to='/users'>users</NavLink>
        <NavLink to='/profile'>profile</NavLink>
        <NavLink to='/Admin'>Admin</NavLink>
        {!auth.user && <NavLink to='/login'>login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
    </nav>
  )
}        