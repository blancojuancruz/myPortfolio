import React from 'react'
import espana from '../../assets/espana.png'
import eeuu from '../../assets/estados-unidos.png'
import { useTranslation } from 'react-i18next'
import './Header.css'

export const LangSelect = () => {
  const [t, i18next] = useTranslation('global')
  return (
    <>
      <h4>
        {t('global.lang')}
      </h4>
      <div className='buttons'>
        <button onClick={() => { i18next.changeLanguage('es') }}>
          <img src={espana} alt='' />
        </button>
        <button onClick={() => { i18next.changeLanguage('en') }}>
          <img src={eeuu} alt='' />
        </button>
      </div>
    </>
  )
}
