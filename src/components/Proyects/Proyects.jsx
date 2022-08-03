import React from 'react'
import portfolioPhoto from '../../assets/hsPortfolioDemo.png'
import portfolioPhoto1 from '../../assets/spotify.png'
import portfolioPhoto2 from '../../assets/apiProject.png'
import './ProyectsSection.css'

const projects = [
  {
    id: 1,
    img: portfolioPhoto,
    title: 'Hardware Store E-commerce',
    github: 'https://github.com/blancojuancruz/reactApp',
    demo: 'https://blancojuancruz.github.io/coder-project/'
  },
  {
    id: 2,
    img: portfolioPhoto1,
    title: 'Reproductor web Clon de Spotify',
    github: 'https://github.com/blancojuancruz/spotifyclonJS',
    demo: 'https://blancojuancruz.github.io/spotifyclonJS/'
  },
  {
    id: 3,
    img: portfolioPhoto2,
    title: 'RESTful API',
    github: 'https://github.com/blancojuancruz/hsStore-API',
    demo: 'https://radiant-river-14751.herokuapp.com/api/products'
  }
]

export const Proyects = () => {
  return (
    <div className='projectsContainer'>
      {
        projects.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id}>
              <div className='imgContainer'>
                <img src={img} alt='Demo img' />
              </div>
              <h3>
                {title}
              </h3>
              <div className='linksContainer'>
                <a href={github} target='_blank' className='portfolioBtn' rel='noreferrer'>GitHub</a>
                <a href={demo} target='_blank' className='portfolioBtn' rel='noreferrer'>Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
