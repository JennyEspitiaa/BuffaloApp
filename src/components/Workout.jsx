import React from 'react'
import { BtnNextOne, FirstLi, OthersLi, UlSlide, WokoutPrg, WorkoutImg, WorkoutTitle } from '../styles/styles'
import { Link } from 'react-router-dom'

const Workout = () => {
    return (
        <>
            <WorkoutImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656113072/BuffaloApp/Img_Bg_zoxas4.png' alt='WorkoutImg' />
            <WorkoutTitle>Workout</WorkoutTitle>
            <WokoutPrg>Start training with usand build muscle or lose weight</WokoutPrg>
            <UlSlide>
                <Link to="/workout"><FirstLi>a</FirstLi></Link>
                <Link to="/discipline"><OthersLi>a</OthersLi></Link>
                <Link to="/character"><OthersLi>a</OthersLi></Link>
            </UlSlide>
            <Link to="/discipline" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>
        </>
    )
}

export default Workout