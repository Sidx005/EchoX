import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Showcase from '../Components/Showcase'
import Products from '../Components/Products'
import Section3 from '../Components/AISect'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='' >
      <Nav/>

        <Hero/>
        <About/>
        <Showcase/>
        <Products/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Home