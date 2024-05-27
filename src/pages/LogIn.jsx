import React, { useState } from 'react'
import email_icon from '../components/assets/email.png'
import password_icon from '../components/assets/password.png'
import YepSignUpInputs from '../utilities/customFormControls/YepSignUpInputs'
import { Formik, Form } from 'formik'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import UserService from '../services/userService'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToken } from '../store/actions/tokenAction';
import { Cookies } from 'react-cookie'


export default function LogIn() {
    const [message, setMessage] = useState("")
    const initialValues = { email: "", password: "" }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cookies = new Cookies();

    const schema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email Address is required'),
        password: Yup.string().required('Password is required')
    })
    const submitHandler = (values) => {
        let userService = new UserService()
        userService.logIn(values).then(response => {
            if (response?.data?.success) {
                if (response?.data?.data){
                    cookies.set('autharization',response.data.data)
                    dispatch(addToken(response.data.data))
                    navigate('/dashboard');
                }
                
            } else {
                setMessage(response.data.message);
            }
        })
    }
    return (
        <div className='logIn' >
            <div className='container'>
                <div className='header'>
                    <div className='text'>Log In</div>
                    <div className='underline'></div>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => submitHandler(values)
                    }
                >
                    <Form className='ui form'>
                        <YepSignUpInputs name="email" src={email_icon} type="text" alt="email_icon" placeholder="E-mail Address" />
                        <YepSignUpInputs name="password" src={password_icon} type='password' alt="password" placeholder="Password" />
                        <Button className="submit" type="submit">Submit</Button>
                    </Form>
                </Formik>
                <br />{message && <label className="lblMessage" color="red">*{message}</label>}
            </div>
        </div >
    )
}
