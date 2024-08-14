import React from 'react'
import Hero from '../Components/Hero'
import About_us from '../Components/About_us'
import Product from '../Components/Product'
import Testimonial from '../Components/Testimonial'
import About_section from '../Components/About_section'

function Home() {
  return (
    <div>
        <Hero/>
        <About_us/>
        <Product/>
        
        <Testimonial/>

    </div>
  )
}

export default Home