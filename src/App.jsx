import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'

import Title from './components/Title/Title'
import Aboutpage from './components/Pages/Aboutpage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title/>
        <Programs/>
        <Aboutpage/>
      </div>
      
      
    </div>
  )
}

export default App
