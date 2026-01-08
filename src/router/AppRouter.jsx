import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Todo from '../pages/Todo'
import Pomodoro from '../pages/Pomodoro'
import DailyGoals from '../pages/DailyGoals'
import Motivation from '../pages/Motivation'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/pomodoro' element={<Pomodoro/>}/>
            <Route path='/dailygoals' element={<DailyGoals/>}/>
            <Route path='/motivation' element={<Motivation/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter