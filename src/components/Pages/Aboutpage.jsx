import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Aboutpage.css'
import about_img from '../../assets/about_img.jpg'
const Aboutpage = () => {
  return (
    <div>
        <Navbar/>
      <h1>ABOUT</h1>
      <div className='about'>
         <div className="about-left">
              <img src={about_img} alt="" className='about-img'/>
         </div>
         <div className='about-right'>
          <h3>Welcome to STYFOOT</h3>
          <p>At STYFOOT, we're dedicated to simplifying your shoe shopping experience. With our carefully curated selection and user-friendly interface, finding the perfect pair has never been easier.
          </p>
          <h2>Our Mission</h2>
          <p>At STYFOOT, we believe in empowering you to express yourself through footwear that's both stylish and comfortable.</p>
          <h2>Get in Touch</h2>
           <p>Thank you for choosing STYFOOT. Explore our collection and reach out with any questions or feedback.
          </p>
         
          
          </div>               
         </div>     
      
    </div>
  )
}

export default Aboutpage