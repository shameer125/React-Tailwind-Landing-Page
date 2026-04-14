import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Work from './components/Work';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Pricing/>
    </div>
  )
}

export default App
