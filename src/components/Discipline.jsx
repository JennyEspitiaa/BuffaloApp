import React from 'react'
import { BtnNextOne, FirstLi, OthersLi, UlSlide, WokoutPrg, WorkoutImg, WorkoutTitle } from '../styles/styles'
import { Link } from 'react-router-dom'

const Discipline = () => {
  return (
    <>
    <WorkoutImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656113072/BuffaloApp/Img_Bg_zoxas4.png' alt='WorkoutImg' />
            <WorkoutTitle>Discipline</WorkoutTitle>
            <WokoutPrg>Develop discipline in yourself train every day</WokoutPrg>
            <UlSlide>
                <Link to="/workout"><OthersLi>a</OthersLi></Link>
                <Link to="/discipline"><FirstLi>a</FirstLi></Link>
                <Link to="/character"><OthersLi>a</OthersLi></Link>
            </UlSlide>
            <Link to="/character" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>

    </>
  )
}

export default Discipline