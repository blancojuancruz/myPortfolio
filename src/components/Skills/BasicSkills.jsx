import React from 'react'
import node from '../../assets/nodejs.png'
import mongoDB from '../../assets/mongodb.png'
import mongoose from '../../assets/mongoose.png'
import { useTranslation } from 'react-i18next'
import jest from '../../assets/jest.png'
import './Skills.css'

export const BasicSkills = () => {
  const { t } = useTranslation('global')

  return (
    <div className='devSkills'>
      <h3>
        {t('projects.bsSkills')}
      </h3>
      <div className='imgsContainer'>
        <span>
          <picture>
            <img src={node} alt='Node JS icon' title='NODEJS' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={mongoDB} alt='Mongo icon' title='MongoDB' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={mongoose} alt='Mongoose icon' title='Mongoose' />
          </picture>
        </span>
        <span>
          <picture>
            <img src={jest} alt='Jest icon' title='Jest JS' />
          </picture>
        </span>
      </div>
    </div>
  )
}
