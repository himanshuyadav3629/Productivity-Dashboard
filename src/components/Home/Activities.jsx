import React, { useContext } from 'react'
import Card from './Card'
import { ImageDataContext } from '../../context/Home/ImageContext'

const Activities = () => {
    const ImageData=useContext(ImageDataContext)
    console.log(ImageData)

  return (
    <div className='h-120 w-full mt-8 flex flex-col justify-around '>
        <div className='flex justify-between'>
            <Card image={ImageData.todo} name={"TO-DO LIST"} route={"/todo"}/>
            <Card image={ImageData.pomodoro} name={"POMODORO-TIMER"} route={"/pomodoro"}/>
        </div>
        <div className='flex justify-between'>
            <Card image={ImageData.motivation} name={"MOTIVATION"} route={"/motivation"}/>
            <Card image={ImageData.dailygoals} name={"DAILY-GOALS"} route={"/dailygoals"}/>
        </div>
    </div>
  )
}

export default Activities