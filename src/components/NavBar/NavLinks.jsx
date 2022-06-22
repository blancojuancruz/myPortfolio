import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineContactMail } from 'react-icons/md'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import './NavBar.css'

export const NavLinks = () => {
  const { t } = useTranslation('global')

  return (
    <ul>
      <li>
        <Link to='home' spy smooth>
          <FaHome />
          <span>{t('navbar.home')}</span>
        </Link>
      </li>
      <li>
        <Link to='aboutme' spy smooth offset={50}>
          <BsFillPersonLinesFill />
          <span>{t('navbar.about')}</span>
        </Link>
      </li>
      <li>
        <Link to='skills' spy smooth offset={50}>
          <GiSkills />
          <span>{t('navbar.skills')}</span>
        </Link>
      </li>
      <li>
        <Link to='projects' spy smooth offset={50}>
          <CgWebsite />
          <span>{t('navbar.projects')}</span>
        </Link>
      </li>
      <li>
        <Link to='contact' spy smooth offset={110}>
          <MdOutlineContactMail />
          <span>{t('navbar.contact')}</span>
        </Link>
      </li>
    </ul>
  )
}
