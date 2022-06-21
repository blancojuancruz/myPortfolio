import React from 'react'
import portfolioPhoto from '../../assets/hsPortfolioDemo.png'
import portfolioPhoto1 from '../../assets/spotify.png'
import './ProyectsSection.css'

const projects = [
  {
    id: 1,
    img: portfolioPhoto,
    title: 'Hardware Store E-commerce',
    github: 'https://github.com/blancojuancruz/coder-project',
    demo: 'https://blancojuancruz.github.io/coder-project/'
  },
  {
    id: 2,
    img: portfolioPhoto1,
    title: 'Reproductor web Clon de Spotify',
    github: 'https://github.com/blancojuancruz/spotifyclonJS',
    demo: 'https://blancojuancruz.github.io/spotifyclonJS/'
  }
]

export const Proyects = () => {
  return (
    <div className='projectsContainer'>
      {
        projects.map(({ id, img, title, github, deploy }) => {
          return (
            <article key={id}>
              <div className='imgContainer'>
                <img src={img} alt='' />
              </div>
              <h3>
                {title}
              </h3>
              <div className='linksContainer'>
                <a href={github} target='_blank' className='portfolioBtn' rel='noreferrer'>GitHub</a>
                <a href={deploy} target='_blank' className='portfolioBtn' rel='noreferrer'>Demostracion</a>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
