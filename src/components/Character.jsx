import React from 'react'
import { BtnNextOne, FirstLi, OthersLi, UlSlide, WokoutPrg, WorkoutImg, WorkoutTitle } from '../styles/styles'
import { Link } from 'react-router-dom'

const Character = () => {
  return (
    <>
        <WorkoutImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656113072/BuffaloApp/Img_Bg-2_tyobrb.png' alt='CharacterImg' />
            <WorkoutTitle>Character</WorkoutTitle>
            <WokoutPrg>Cultivate in you an iron character for training</WokoutPrg>
            <UlSlide>
                <Link to="/workout"><OthersLi>a</OthersLi></Link>
                <Link to="/discipline"><OthersLi>a</OthersLi></Link>
                <Link to="/character"><FirstLi>a</FirstLi></Link>
            </UlSlide>
            <Link to="/" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>

    </>
  )
}

export default Character