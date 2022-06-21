import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Proyects } from './Proyects'
import './ProyectsSection.css'

export const ProyectsSection = () => {
  return (
    <section id='projects' className='projectSection'>
      <SectionHeader sectionTittle='Mis Proyectos' sectionDescription='Les presento algunos de los proyectos en los que trabaje en mis cursos de Desarrollo web / JavaScript / React en CoderHouse' />
      <Proyects />
    </section>
  )
}
