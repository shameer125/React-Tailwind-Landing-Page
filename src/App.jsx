import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Work from './components/Work';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <Features />
      <Work />
    </div>
  )
}

export default App
