import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.jpeg'

const Navbar = () => {



    
  return (
   <nav className='container'>
    <img src={logo} alt="" className='logo'/>
    <ul>
        
        <a href='/'><li>HOME</li></a>
        <a href='about'><li>ABOUT</li></a>
        <a href='login'><li><button className='btn' id='loginbtn'>Login</button></li></a>
        
      </ul>
      
   </nav>
   

   
  )
}

export default Navbar