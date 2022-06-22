import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import './index.css'
import enTranslation from './translations/en/global.json'
import esTranslation from './translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  detection: ['localStorage', 'cookie', 'htmlTag'],
  lng: 'es',
  resources: {
    es: {
      global: esTranslation
    },
    en: {
      global: enTranslation
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
