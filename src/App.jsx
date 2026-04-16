import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Extension from './components/Extension';
import Customization from './components/Customization';
import Sponsors from './components/Sponsors';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Extension />
      <Customization />
      <Pricing />
      <Testimonials />
      <Sponsors />
      <CTA />
      <Footer/>
    </div>
  )
}

export default App
