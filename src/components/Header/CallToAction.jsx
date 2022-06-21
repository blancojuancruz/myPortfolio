import React from 'react'
import CV from '../../assets/curriculumvitae.pdf'
import { Link } from 'react-scroll'
import './Header.css'

export const ActionButtons = () => {
  return (
    <div className='callToActionBtn'>
      <a href={CV} download>¡Descarga mi CV!</a>
      <Link to='contact' spy smooth className='contactBtn'>Contacta Conmigo</Link>
    </div>
  )
}
