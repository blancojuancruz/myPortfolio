import React from 'react'
import './HeaderSec.css'

export const SectionHeader = ({ sectionTittle, sectionDescription }) => {
  return (
    <header className='sectionHeader'>
      <h2>{sectionTittle}</h2>
      <p>{sectionDescription}</p>
    </header>
  )
}
