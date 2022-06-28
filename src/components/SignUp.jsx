import React from 'react'
import { AllRead, BtnRegister, EmailSignUp, FacebookSignUp, FormSignUp, FullNameInput, GoogleSignUp, IconsMediaSignUp, LogoBtn, OrSignIn, PassWordSignUp, PassWordSignUp2, PhoneNumberInput, SignInText } from '../styles/styles'
// eslint-disable-next-line
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { GoogleLogin, registerUserAsync} from '../redux/actions/actionRegister'

const SignUpSchema = Yup.object().shape({
  nombre: Yup.string().min(2, 'Nombre too short').max(20, 'Nombre too long').required("This input its required"),
  email: Yup.string().email("it has to be as example@email.com").required("This input its required"),
  phone: Yup.number().min(7, 'Phone its too short').required("This input its required"),
  passOne: Yup.string().min(2, 'Password must be up than 6 caracters').max(10, 'Password must be only 10 caracteres').required("This input its required").oneOf([Yup.ref('passTwo')], 'Password doesnt match'),
  passTwo:  Yup.string().min(2, 'Password must be up than 6 caracters').max(10, 'Password must be only 10 caracteres').required("This input its required").oneOf([Yup.ref('passOne')], 'Password doesnt match'),
});

const SignUp = () => {
    
    const dispatch = useDispatch()

  return (
    <>
         <LogoBtn src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656007879/BuffaloApp/Logo_2_awutho.png' alt='LogoBtn'/>
          <SignInText>Sign Up</SignInText>
          <Formik 
            initialValues={
                {
                    nombre:'',
                    email:'',
                    phone:'',
                    passOne:'',
                    passTwo: '',
                }
            }
            
            validationSchema={SignUpSchema}

            onSubmit={values => {
                console.log(values.nombre, values.email, values.phone, values.passOne)
                dispatch(registerUserAsync(values.nombre, values.email, values.phone, values.passOne))
            }}
          >
            {({errors, touched}) => (
            <FormSignUp>
                <FullNameInput  placeholder='Full Name' type='text' name="nombre"/>
                {errors.nombre && touched.nombre ? (<div style={{'color': 'white'}}>{errors.nombre}</div>) : null}

                <EmailSignUp placeholder='Email' type='email' name="email"/>
                {errors.email && touched.email ? (<div style={{'color': 'white'}}>{errors.email}</div>) : null}

                <PhoneNumberInput placeholder='Phone Number' type='number' name="phone"/>
                {errors.phone && touched.phone ? (<div style={{'color': 'white'}}>{errors.phone}</div>) : null}

                <PassWordSignUp placeholder='Password' type='password' name="passOne" />
                {errors.passOne && touched.passOne ? (<div style={{'color': 'white'}}>{errors.passOne}</div>) : null}

                <PassWordSignUp2 placeholder='Confirm Password' type='password' name="passTwo"/>
                {errors.passTwo && touched.passTwo ? (<div style={{'color': 'white'}}>{errors.passTwo}</div>) : null}
        
                <AllRead>I have rad the security policy<input type='checkbox'/></AllRead>
                    <BtnRegister type="submit">Registration</BtnRegister>
                    </FormSignUp>
            )}
                </Formik>

                        <OrSignIn>OR Sign In with</OrSignIn>
                            <IconsMediaSignUp>
                                <GoogleSignUp onClick={()=> dispatch(GoogleLogin())} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656362479/BuffaloApp/google_nufnnb.png' alt='googleSignUp'/>
                                <p> | </p>
                                <FacebookSignUp src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656362479/BuffaloApp/facebook_1_hrkbol.png' alt='facebookSignUp' />
                            </IconsMediaSignUp>
    </>
  )
}

export default SignUp