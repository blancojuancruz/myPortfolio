import React from 'react'
import { NavLinks } from './NavLinks'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
      <nav className='navBarContainer'>
        <NavLinks />
      </nav>
    </>
  )
}
