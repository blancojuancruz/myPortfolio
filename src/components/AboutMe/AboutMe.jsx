import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { AboutContent } from './AboutContent'
import { useTranslation } from 'react-i18next'
import './AboutMe.css'

export const AboutMe = () => {
  const { t } = useTranslation('global')
  return (
    <section id='aboutme' className='aboutMe'>
      <div className='container'>
        <SectionHeader
          sectionTittle={t('navbar.about')} sectionDescription={t('about.aboutDescription')}
        />
        <div className='personalDataContainer'>
          <AboutContent />
        </div>
      </div>
    </section>
  )
}
