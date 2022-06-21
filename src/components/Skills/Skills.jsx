import React from 'react'
import './Skills.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { SetSills } from './SetSkills'
import { BasicSkills } from './BasicSkills'

export const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <SectionHeader
        sectionTittle='Skills' sectionDescription='Estos son los lenguajes con los que trabajo y mas herramientas que encuentro utiles a la hora de desarrollar un sitio web'
      />
      <div className='skillContainer'>
        <SetSills />
      </div>
      <div className='basicSkills'>
        <BasicSkills />
      </div>
    </section>
  )
}
