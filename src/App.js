import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperence/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="container">
      <Hero/>
      <Skills />
      <WorkExperience />
      <ContactMe />
    </div>
      <Footer />
    </>
  )
}

export default App
