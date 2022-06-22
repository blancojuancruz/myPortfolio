import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { AboutContent } from './AboutContent'
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <section id='aboutme' className='aboutMe'>
      <div className='container'>
        <SectionHeader
          sectionTittle='Sobre Mi' sectionDescription='Mi nombre es Juan Cruz y soy Desarrollador Web Junior especialiazdo en JavaScript y React.
        Abajo te comparto algunos datos, ¡Espero que te sean utiles!'
        />
        <div className='personalDataContainer'>
          <AboutContent />
        </div>
      </div>
    </section>
  )
}
