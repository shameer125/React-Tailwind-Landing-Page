import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Pricing />
      <Testimonials/>
    </div>
  )
}

export default App
