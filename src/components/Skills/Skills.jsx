import React from 'react'
import './Skills.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { SetSills } from './SetSkills'
import { BasicSkills } from './BasicSkills'
import { useTranslation } from 'react-i18next'

export const Skills = () => {
  const { t } = useTranslation('global')
  return (
    <section id='skills' className='skills'>
      <SectionHeader
        sectionTittle={t('navbar.skills')} sectionDescription={t('skills.skillsDescription')}
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
