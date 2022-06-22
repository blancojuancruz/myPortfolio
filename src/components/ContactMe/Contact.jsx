import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { ContactForm } from './ContactForm'
import { useTranslation } from 'react-i18next'
import './Contact.css'

export const Contact = () => {
  const { t } = useTranslation('global')
  return (
    <section id='contact'>
      <SectionHeader
        sectionTittle={t('navbar.contact')} sectionDescription={t('contact.contactDescription')}
      />
      <ContactForm />
    </section>
  )
}
