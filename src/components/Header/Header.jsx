import React from 'react'
import { HeaderContent } from './HeaderContent'
import { LangSelect } from './LangInput'
import './Header.css'

export const Header = () => {
  return (
    <section id='home' className='headerContainer'>
      <div className='langSelect'>
        <LangSelect />
      </div>
      <HeaderContent />
    </section>
  )
}
