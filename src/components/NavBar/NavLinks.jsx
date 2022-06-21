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
        <Link to='home' spy smooth>
          <FaHome />
          <span>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to='aboutme' spy smooth>
          <BsFillPersonLinesFill />
          <span>Sobre mi</span>
        </Link>
      </li>
      <li>
        <Link to='skills' spy smooth>
          <GiSkills />
          <span>Skills</span>
        </Link>
      </li>
      <li>
        <Link to='projects' spy smooth>
          <CgWebsite />
          <span>Mis Proyectos</span>
        </Link>
      </li>
      <li>
        <Link to='contact' spy smooth>
          <MdOutlineContactMail />
          <span>¡Contactame!</span>
        </Link>
      </li>
    </ul>
  )
}
