import React from 'react'
import html from '../../assets/html5.png'
import css from '../../assets/css3.png'
import javaScript from '../../assets/js.png'
import typeScript from '../../assets/ts.png'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const skillsArray = [
  {
    id: 1,
    src: html,
    title: 'HTML5',
    alt: 'Lang Icon'
  },
  {
    id: 2,
    src: css,
    title: 'CSS3',
    alt: 'Lang Icon'
  },
  {
    id: 3,
    src: javaScript,
    title: 'JavaScript',
    alt: 'Lang Icon'
  },
  {
    id: 4,
    src: typeScript,
    title: 'TypeScript',
    alt: 'Lang Icon'
  }
]

export const LangSkills = () => {
  const { t } = useTranslation('global')

  return (
    <div className='devSkills'>
      <h3>
        {t('projects.lang')}
      </h3>
      <div className='imgsContainer'>
        {skillsArray.map(({ id, src, title, alt }) => {
          return (
            <span key={id}>
              <picture>
                <img src={src} alt={alt} title={title} />
              </picture>
            </span>
          )
        })}
      </div>
    </div>
  )
}
