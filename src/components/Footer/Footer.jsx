import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsTwitch, BsGithub } from 'react-icons/bs'
import './Footer.css'

const listLinks = [
  {
    id: 1,
    href: 'https://twitter.com/blancojuanchi',
    target: '_blank',
    icon: <BsTwitter />,
    name: 'Twitter',
    className: 'twitter'
  },
  {
    id: 2,
    href: 'https://www.instagram.com/',
    target: '_blank',
    icon: <BsInstagram />,
    name: 'Instagram',
    className: 'instagram'
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/juan-cruz-blanco-221790184/',
    target: '_blank',
    icon: <BsLinkedin />,
    name: 'Linkedin',
    className: 'linkedin'
  },
  {
    id: 4,
    href: 'https://www.twitch.tv/juanchibln',
    target: '_blank',
    icon: <BsTwitch />,
    name: 'Twitch',
    className: 'twitch'
  },
  {
    id: 5,
    href: 'https://github.com/blancojuancruz?tab=repositories',
    target: '_blank',
    icon: <BsGithub />,
    name: 'GitHub',
    className: 'github'
  }
]

export const Footer = () => {
  return (
    <footer>
      <h4>
        Juan Cruz Blanco
      </h4>
      <div className='footerLinks'>
        {
            listLinks.map(({ id, href, target, icon, name, className }) => {
              return (
                <li key={id}>
                  <a href={href} target={target} rel='noreferrer' className={className}>
                    {icon}
                    <span>{name}</span>
                  </a>
                </li>
              )
            })
        }
      </div>
      <div className='coudeSources'>
        <p>
          Powered by:
        </p>
        <ul>
          <li>Mantine UI /</li>
          <li>Formik /</li>
          <li>EmaiJS /</li>
          <li>React-scroll /</li>
          <li>React-hot-toast</li>
        </ul>
      </div>
    </footer>
  )
}
