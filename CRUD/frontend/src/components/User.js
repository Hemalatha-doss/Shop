import {Outlet, useSearchParams} from 'react-router-dom'

export default function User() {

const[searchParams,setSearchParams]=useSearchParams()
const isActive=searchParams.get('filter')==='active'
  return (
    <div>User page

<Outlet/>
<button onClick={()=>{setSearchParams({'filter': 'active'})}}>Active users</button>
<button onClick={()=>{setSearchParams({})}}>All users</button>

{isActive?"Active users" : "all users"}



    </div>
  )
}
