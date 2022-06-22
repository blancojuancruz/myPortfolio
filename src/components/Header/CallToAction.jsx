import React from 'react'
import CV from '../../assets/curriculumvitae.pdf'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import './Header.css'

export const ActionButtons = () => {
  const { t } = useTranslation('global')

  return (
    <div className='callToActionBtn'>
      <a href={CV} download>{t('header.downloadBtn')}</a>
      <Link to='contact' spy smooth offset={180} className='contactBtn'>{t('header.contactBtn')}</Link>
    </div>
  )
}
