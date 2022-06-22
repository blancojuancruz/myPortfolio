import React from 'react'
import './Header.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { SocialIcons } from './SocialIcons'
import { ActionButtons } from './CallToAction'
import { useTranslation } from 'react-i18next'

export const HeaderContent = () => {
  const { t } = useTranslation('global')

  const { text } = useTypewriter({
    words: ['Front End Developer', 'React.Js Developer'],
    loop: 0
  })

  return (
    <div className='textContainer'>
      <h1>Juan Cruz Blanco</h1>
      <p>
        <span>
          {t(text)}
          <Cursor cursorStyle='_' />
        </span>
      </p>
      <SocialIcons />
      <ActionButtons />
    </div>
  )
}
