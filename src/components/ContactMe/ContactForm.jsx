import React, { useRef, useState } from 'react'
import './Contact.css'
import { SiGmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid
} from '@mantine/core'

export const ContactForm = () => {
  const form = useRef()
  const [sendedForm, setSendedForm] = useState(false)

  const myToast = () => toast.success('¡Correo Enviado!')
  const errorToast = () => toast.error('No se pudo enviar el correo :C')

  const sendEmail = (e) => {
    emailjs.sendForm('service_aibf2im', 'template_lrd6oxg', form.current, '4WMbvwLgVu8d__eRv')
      .then((result) => {
        setSendedForm(true)
        console.log(result.text)
        myToast()
      }, (error) => {
        error = errorToast()
      })
  }

  return (
    <div className='contactContainer'>
      <div className='refsContainer'>
        <article>
          <SiGmail />
          <h4>
            Email
          </h4>
          <h5>blancojuancruz97@gmail.com</h5>
          <a href='mailto:blancojuancruz97@gmail.com' target='_blank' rel='noreferrer'>Contactame por Email</a>
        </article>
        <article>
          <BsWhatsapp />
          <h4>
            WhatsApp
          </h4>
          <h5>+54 11-21755044</h5>
          <a href='https://api.whatsapp.com/send?phone=541121755044' target='_blank' rel='noreferrer'>Contactame por WhatsApp</a>
        </article>
      </div>

      <Formik
        initialValues={{ name: '', email: '', textarea: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Por favor ingrese un nombre'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = 'El nombre solo puede contener letras y espacios'
          }

          if (!values.email) {
            errors.email = 'Por favor ingrese un correo valido'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'El nombre solo puede contener letras y espacios'
          }

          if (!values.textarea) {
            errors.textarea = 'Por favor ingrese un mensaje para que pueda leerlo luego!'
          }

          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()
          sendEmail()
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => {
          return (
            <Form
              className='contactForm' ref={form}
            >
              <Text>
                También podes dejarme un mensaje respondere a la brevedad
              </Text>

              <div>
                <div className='shortInputs'>
                  <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                      label='Nombre / Empresa'
                      type='text'
                      name='name'
                      placeholder='Nombre'
                      values={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <span className='error'>{errors.name}</span>}

                    <TextInput
                      label='Email'
                      type='email'
                      name='email'
                      placeholder='ejemplo@gmail.com'
                      values={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </SimpleGrid>
                  {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                </div>

                <Textarea
                  mt='md'
                  label='Su mensaje'
                  placeholder='Hola Juan Cruz, ¡Nos interesa tu perfil!'
                  minRows={3}
                  name='textarea'
                  values={values.textarea}
                  onChange={handleChange}
                />
                {errors.textarea && <span className='error'>{errors.textarea}</span>}

                <Group position='right' mt='md'>
                  <Button type='submit' className='portfolioBtn' disabled={isSubmitting}>
                    Enviar mensaje
                  </Button>
                  {sendedForm && <Toaster
                    position='bottom-center'
                    reverseOrder={false}
                                 />}
                </Group>
              </div>
            </Form>
          )
        }}
      </Formik>

    </div>
  )
}
