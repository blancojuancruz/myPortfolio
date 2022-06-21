import React from 'react'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import mantineUI from '../../assets/mantineUI.png'
import git from '../../assets/git.png'
import tailwind from '../../assets/tailwind.png'
import bootstrap from '../../assets/bootstrap.png'
import './Skills.css'

export const LangTools = () => {
  return (
    <div className='devSkills'>
      <h3>
        Herramientas de desarrollo
      </h3>
      <div className='imgsContainer'>
        <span>
          <picture>
            <img src={react} alt='React icon' title='ReactJS' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={sass} alt='SASS icon' title='SASS' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={mantineUI} alt='Mantine icon' title='Mantine CSS' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={git} alt='git icon' title='GIT' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={tailwind} alt='Tailwind css icon' title='Tailwind CSS' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={bootstrap} alt='Bootstrap icon' title='Bootstrap' />
          </picture>
        </span>
      </div>
    </div>
  )
}
