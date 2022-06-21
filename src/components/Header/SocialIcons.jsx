import React from 'react'
import './Header.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

export const SocialIcons = () => {
  return (
    <div className='socialLinks' about='_blank'>
      <a href='https://www.linkedin.com/in/juan-cruz-blanco-221790184/' className='linkedin' rel='noopener noreferrer' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/blancojuancruz?tab=repositories' className='github' rel='noopener noreferrer' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.instagram.com/blancojuanchi/' className='instagram' rel='noopener noreferrer' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  )
}
