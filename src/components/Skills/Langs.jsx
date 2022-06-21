import React from 'react'
import html from '../../assets/html5.png'
import css from '../../assets/css3.png'
import javaScript from '../../assets/js.png'
import typeScript from '../../assets/ts.png'
import './Skills.css'

export const LangSkills = () => {
  return (
    <div className='devSkills'>
      <h3>
        Lenguajes
      </h3>
      <div className='imgsContainer'>
        <span>
          <picture>
            <img src={html} alt='HTML5 icon' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={css} alt='CSS3 icon' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={javaScript} alt='JS icon' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={typeScript} alt='TS icon' />
          </picture>
        </span>
      </div>
    </div>
  )
}
