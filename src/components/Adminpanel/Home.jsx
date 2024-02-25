import React from 'react'
import './Home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Home = (props) => {
  return (
    <div>

     <Topbar xxx={props.checkLogout}/>
     <Sidebar/>
       <p className='wel'> WELCOME TO THE GROCERY SHOP!-Admin</p>
     
      </div>
  )
}

export default Home