import React, { useRef, useState } from 'react'
import './Contact.css'
import { SiGmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid
} from '@mantine/core'

export const ContactForm = () => {
  const { t } = useTranslation('global')
  const form = useRef()
  const [sendedForm, setSendedForm] = useState(false)

  const myToast = () => toast.success(t('contact.mailToast'))
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
          <a href='mailto:blancojuancruz97@gmail.com' target='_blank' rel='noreferrer'>
            {t('contact.email')}
          </a>
        </article>
        <article>
          <BsWhatsapp />
          <h4>
            WhatsApp
          </h4>
          <h5>+54 11-21755044</h5>
          <a href='https://api.whatsapp.com/send?phone=541121755044' target='_blank' rel='noreferrer'>
            {t('contact.whatsapp')}
          </a>
        </article>
      </div>

      <Formik
        initialValues={{ name: '', email: '', textarea: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = t('contact.errorMessages.name')
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = t('contact.errorMessages.symbolsName')
          }

          if (!values.email) {
            errors.email = t('contact.errorMessages.email')
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = t('contact.errorMessages.symbolsEmail')
          }

          if (!values.textarea) {
            errors.textarea = t('contact.errorMessages.textArea')
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
                {t('contact.formText')}
              </Text>

              <div>
                <div className='shortInputs'>
                  <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                      label={t('contact.inputLabels.name')}
                      type='text'
                      name='name'
                      placeholder={t('contact.inputLabels.nameHolder')}
                      values={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <span className='error'>{errors.name}</span>}

                    <TextInput
                      label='Email'
                      type='email'
                      name='email'
                      placeholder={t('contact.inputLabels.emailHolder')}
                      values={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </SimpleGrid>
                  {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                </div>

                <Textarea
                  mt='md'
                  label={t('contact.inputLabels.textArea')}
                  placeholder={t('contact.inputLabels.textAreaHolder')}
                  minRows={3}
                  name='textarea'
                  values={values.textarea}
                  onChange={handleChange}
                />
                {errors.textarea && <span className='error'>{errors.textarea}</span>}

                <Group position='right' mt='md'>
                  <Button type='submit' className='portfolioBtn' disabled={isSubmitting}>
                    {t('contact.button')}
                  </Button>
                  {sendedForm && <Toaster
                    position='top-center'
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
