import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features } from 'tailwindcss';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <Features/>
    </div>
  )
}

export default App
