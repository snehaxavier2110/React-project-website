import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero'>
         <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>CHOOSE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES AND ACCESSORIES</p>
                <button className='btn'><Link to='programs' smooth={true} offset={-80}>Explore more</Link></button>
         </div>
            
         <div className="hero-image">
            <img src="src\assets\hero.jpg" alt="hero" />
            </div>     
    </div>
  )
}

export default Hero