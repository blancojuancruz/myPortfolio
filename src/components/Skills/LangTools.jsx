import React from 'react'
import react from '../../assets/react.png'
import sass from '../../assets/sass.png'
import mantineUI from '../../assets/mantineUI.png'
import git from '../../assets/git.png'
import tailwind from '../../assets/tailwind.png'
import bootstrap from '../../assets/bootstrap.png'
import './Skills.css'

const skillsArray = [
  {
    id: 1,
    skillImg: react,
    tittle: 'React. JS',
    alt: 'Lang Icon'
  },
  {
    id: 2,
    skillImg: sass,
    tittle: 'SASS',
    alt: 'Lang Icon'
  },
  {
    id: 3,
    skillImg: mantineUI,
    tittle: 'Mantine UI',
    alt: 'Lang Icon'
  },
  {
    id: 4,
    skillImg: git,
    tittle: 'Git',
    alt: 'Lang Icon'
  },
  {
    id: 5,
    skillImg: tailwind,
    tittle: 'Tailwind UI',
    alt: 'Lang Icon'
  },
  {
    id: 6,
    skillImg: bootstrap,
    tittle: 'Bootstrap 5',
    alt: 'Lang Icon'
  }
]

export const LangTools = () => {
  return (
    <div className='devSkills'>
      <h3>
        Herramientas de desarrollo
      </h3>
      <div className='imgsContainer'>
        {skillsArray.map(({ id, skillImg, tittle, alt }) => {
          return (
            <span key={id}>
              <picture>
                <img src={skillImg} alt={alt} title={tittle} />
              </picture>
            </span>
          )
        })}
      </div>
    </div>
  )
}
