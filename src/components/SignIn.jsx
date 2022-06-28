import React from 'react'
import {BtnSignIn, EmailInput, FacebookSignIn, ForgotPass, FormSignIn, GoogleSignIn, IconsMedia, LogoBtn, PasswordInput, QuestionSignIn, SignInText, SingInWith } from '../styles/styles'
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { GoogleLogin, LoginAsync } from '../redux/actions/actionRegister'

const SignUpSchema = Yup.object().shape({
   
  email: Yup.string().email("it has to be as example@email.com").required("This input its required"),
  passOne: Yup.string().min(2, 'Password must be up than 6 caracters').max(10, 'Password must be only 10 caracteres').required("This input its required")
 
})

const SignIn = () => {
  const dispatch = useDispatch()
  return (
    <>
        <LogoBtn src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656007879/BuffaloApp/Logo_2_awutho.png' alt='LogoBtn'/>
          <SignInText>Sign In</SignInText>
          <Formik 
            initialValues={
                {
                    email:'',
                    passOne:'',
                }
            }
            
            validationSchema={SignUpSchema}

            onSubmit={values => {
                console.log('hola');
                console.log(values.email,values.passOne)
                dispatch(LoginAsync(values.email, values.passOne))
            }}
          >
            {({errors, touched}) => (
            <FormSignIn>
              <EmailInput  placeholder='Email' type='email' name="email"/>
               {errors.email && touched.email ? (<div style={{'color': 'white'}}>{errors.email}</div>) : null}
              <PasswordInput placeholder='Password' type='password' name="passOne"/>
               {errors.passOne && touched.passOne ? (<div style={{'color': 'white'}}>{errors.passOne}</div>) : null}
              <BtnSignIn type="submit">Sign In</BtnSignIn>

              <ForgotPass>Forgot password?</ForgotPass>
                  <SingInWith>Sign In with</SingInWith>
                    <IconsMedia>
                      <GoogleSignIn onClick={()=> dispatch(GoogleLogin())} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656362479/BuffaloApp/google_nufnnb.png' alt='google' />
                        <p> | </p>
                         <FacebookSignIn  src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656362479/BuffaloApp/facebook_1_hrkbol.png' alt='facebook'/>
                    </IconsMedia>
            </FormSignIn>
            )}
            </Formik>   
                        <QuestionSignIn>Don't have an account?<Link to='/signUp' style={{'textDecoration':'none'}}><span style={{'fontWeight': '600', 'color': '#33ccff'}}> Sign Up</span></Link></QuestionSignIn>
          
    </>
  )
}

export default SignIn