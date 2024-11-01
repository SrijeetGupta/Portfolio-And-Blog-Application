import React from 'react'
import './css/navbar.css'
import { Link ,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div id="navbar">
        <div >
            <ul >
                <li>
                  
                  <NavLink to='/' className={({isActive})=>`${isActive?"activelink":"link"}`} >Home</NavLink></li>
                <li> <Link to="https://www.linkedin.com/in/srijeetgupta/" target='_blank' className='link'>About</Link></li>
                <li><a href="https://github.com/SrijeetGupta" target='_blank' className='link'>Project</a></li>
                <li>  <NavLink to='/blogs' className={({isActive})=>`${isActive?"activelink":"link"}`} >Blogs</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar