import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineContactMail } from 'react-icons/md'
import { Link } from 'react-scroll'
import './NavBar.css'

export const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to='home' spy smooth offset={20}>
          <FaHome />
          <span>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to='aboutme' spy smooth offset={20}>
          <BsFillPersonLinesFill />
          <span>Sobre mi</span>
        </Link>
      </li>
      <li>
        <Link to='skills' spy smooth offset={20}>
          <GiSkills />
          <span>Skills</span>
        </Link>
      </li>
      <li>
        <Link to='projects' spy smooth offset={20}>
          <CgWebsite />
          <span>Mis Proyectos</span>
        </Link>
      </li>
      <li>
        <Link to='contact' spy={false} smooth offset={-100}>
          <MdOutlineContactMail />
          <span>¡Contáctame!</span>
        </Link>
      </li>
    </ul>
  )
}
