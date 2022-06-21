import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <section id='contact'>
      <SectionHeader
        sectionTittle='!Contactame!' sectionDescription='Si te gusto mi perfil no dudes en ponerte en contacto conmigo.
      Te dejo varios metodos:'
      />
      <ContactForm />
    </section>
  )
}
