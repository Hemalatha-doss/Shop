import {Link,Outlet} from 'react-router-dom'
import React from 'react'

export default function Product() {
  return (
    <div>

product page
<input type='search' placeholder='search here'/>
<nav>
    <Link to='new'>New</Link>
    <Link to='offered'>Offered</Link>
  
</nav>
<Outlet/>
    </div>
  )
}
