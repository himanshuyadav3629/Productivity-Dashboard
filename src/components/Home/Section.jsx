import React from 'react'
import Hero from './Hero'
import Activities from './Activities'
import Audio from "../Home/Audio"
import Temperature from './Temperature'
import { Route,Routes } from 'react-router-dom'
import Todo from '../../pages/Todo'

const Section = () => {
  return (
    <div className='h-fit w-full bg-sky-100 p-5'>
        <Hero/>
        <Activities/>
        <Audio/>
        <Temperature/>
        
    </div>
  )
}

export default Section