import React, {useState} from 'react'

import user_icon from '../components/assets/person.png'
import email_icon from '../components/assets/email.png'
import password_icon from '../components/assets/password.png'
import YepSignUpInputs from '../utilities/customFormControls/YepSignUpInputs'
import { Formik, Form } from 'formik'
import { Button, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import UserService from '../services/userService'

export default function SignUp() {
  const [message, setMessage] = useState("")
  const initialValues = { userName: "", email: "", password: "" }
  const schema = Yup.object({
    userName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email').required('Email Address is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  })
  const submitHandler = (values) => {
    let userService = new UserService
    userService.userAdd(values).then(response => setMessage(response.data.message))
  }
  
  
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
          onSubmit={(values) => submitHandler(values)}
        >
          <Form className='ui form'>
            <YepSignUpInputs name="userName" src={user_icon} type='text' alt="user_icon" placeholder="User Name" />
            <YepSignUpInputs name="email" src={email_icon} type="text" alt="email_icon" placeholder="E-mail Address" />
            <YepSignUpInputs name="password" src={password_icon} type='password' alt="password" placeholder="Password" />
            {message && <Label>{message}</Label>}<br/>
            <Button className="submit" type="submit" inverted color='green'>Submit</Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
