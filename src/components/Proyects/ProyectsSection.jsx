import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Proyects } from './Proyects'
import { useTranslation } from 'react-i18next'
import './ProyectsSection.css'

export const ProyectsSection = () => {
  const { t } = useTranslation('global')
  return (
    <section id='projects' className='projectSection'>
      <SectionHeader sectionTittle={t('navbar.projects')} sectionDescription={t('projects.projectDescription')} />
      <Proyects />
    </section>
  )
}
