import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'

import Hero from './Components/Hero'
import About_us from './Components/About_us'
import Product from './Components/Product'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
      {/* <div>
        <Navbar/>
        <Hero/>
        <About_us/>
        <Product/>
        <Testimonial/>
        <Footer/>
      </div> */}
    </>
  )
}

export default App
