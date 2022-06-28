import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from '../components/Intro'
import Workout from '../components/Workout'
import SignIn from '../components/SignIn'
import Discipline from '../components/Discipline'
import Character from '../components/Character'
import SignUp from '../components/SignUp'
import Home from '../components/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}/>

            <Route path='/intro' element={<Intro/>}/>
            <Route path='/workout' element={<Workout/>}/>
            <Route path='/discipline' element={<Discipline/>}/>
            <Route path='/character' element={<Character/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes