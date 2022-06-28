import React from 'react'
import { AppName, IntroDiv, LogoImg } from '../styles/styles'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
        <IntroDiv>
            <Link to="/Workout"><LogoImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656007879/BuffaloApp/Logo_2_awutho.png' alt='logoApp'/></Link>
            <AppName> Buffalo</AppName>
        </IntroDiv>
    </>

  )
}

export default Intro