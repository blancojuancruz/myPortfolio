import React from 'react'
import mePhoto from '../../assets/me-portfolio.jpg'
import { BsFillPhoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { FaBirthdayCake } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './AboutMe.css'

export const AboutContent = () => {
  return (
    <>
      <picture>
        <img src={mePhoto} alt='Personal image' />
      </picture>
      <div className='photoContentText'>
        <h3>
          JavaScript/React Developer
        </h3>
        <p>
          Te comparto algunos de mis datos personales que quizas te interesen
        </p>
        <article>
          <div className='personalInfo'>
            <ul>
              <li>
                <BsFillPhoneFill />
                <strong>+54 1121755044</strong>
              </li>
              <li>
                <ImLocation />
                <strong>Buenos Aires, Argentina</strong>
              </li>
            </ul>
          </div>
          <div className='personalInfo'>
            <ul>
              <li>
                <IoMdMail />
                <strong>blancojuancruz@gmail.com</strong>
              </li>
              <li>
                <FaBirthdayCake />
                <strong>24 Años, 17-11-1997</strong>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  )
}
