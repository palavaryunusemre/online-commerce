import React, { useState } from 'react'

import user_icon from '../components/assets/person.png'
import email_icon from '../components/assets/email.png'
import password_icon from '../components/assets/password.png'
import YepSignUpInputs from '../utilities/customFormControls/YepSignUpInputs'
import { Formik, Form } from 'formik'
import { Button, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import UserService from '../services/userService'
import { useSelector } from "react-redux";

export default function SignUp() {
  const [message, setMessage] = useState("")
  const [messageStatus, setMessageStatus] = useState("")
  const initialValues = { userName: "", email: "", password: "" }
  const token = useSelector(state => state.token.tokenItems)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const schema = Yup.object({
    userName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email').required('Email Address is required'),
    password: Yup.string().min(12, 'Password must be at least 12 characters').required('Password is required')
  })
  const submitHandler = (values) => {
    let userService = new UserService()
    userService.userAdd(values,headers).then(response => { setMessage(response?.data?.message); setMessageStatus(response?.data?.success) })
  }
  const generatePassword = (setFieldValue) => {
    const charset = "!@#$%^&*()0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newPassword = ""
    const passwordLength = 12

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setFieldValue("password", newPassword)
  };
  return (
    <div className='singUp'>
      <div className='container'>
        <div className='header'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => submitHandler(values)
          }
        >
          {({ setFieldValue }) => (
            <Form className='ui form'>
              <YepSignUpInputs name="userName" src={user_icon} type='text' alt="user_icon" placeholder="User Name" />
              <YepSignUpInputs name="email" src={email_icon} type="text" alt="email_icon" placeholder="E-mail Address" />
              <YepSignUpInputs name="password" src={password_icon} type='text' alt="password" readOnly btnType="button" btnOnClick={() => generatePassword(setFieldValue)} btnText="Generate Password"/>
              <Button className="submit" type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
        <br />{message && <Label className="lblMessage" tag color={messageStatus ? "green" : "red"}>{message}</Label>}
      </div>
    </div>
  )
}
