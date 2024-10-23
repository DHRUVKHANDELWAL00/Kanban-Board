import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StatusCard from './components/Status/StatusCard'
import PriorityCard from './components/Priority/PriorityCard'
import UserCard from './components/User/UserCard'
function App() {
  const [count, setCount] = useState(0)
  const [sort,setSort]=useState(0);

  return (
    <>
            <Navbar count={count} setCount={setCount} sort={sort} setSort={setSort}/>
            
            {console.log("count is ",count)}
            {count==1 &&  <UserCard sort={sort}/>}
            {count==2 && <PriorityCard sort={sort}/>}
            {count==3 && <StatusCard sort={sort}/>}
            
            
            
            
    </>
  )
}

export default App
