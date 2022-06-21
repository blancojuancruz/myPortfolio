import React from 'react'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Skills } from './components/Skills/Skills'
import { ProyectsSection } from './components/Proyects/ProyectsSection'
import { Contact } from './components/ContactMe/Contact'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <ProyectsSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
