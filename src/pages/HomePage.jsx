import React from 'react'
import Navbar from '../components/Navbar'
import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import Experience from './Experience'
import ServicesPage from './ServicesPage'
import Portfolio from './Portfolio'
import ContactForm from './ContactForm'
import Footer from '../components/Footer'
import { div } from 'framer-motion/client'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <Experience />
      <ServicesPage />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default HomePage;