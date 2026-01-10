import React from 'react'
import TodoEntry from '../components/TODO/TodoEntry'
import TodoAllList from '../components/TODO/TodoAllList'

const Todo = () => {
  return (
    <div className='p-4 min-h-screen bg-sky-200 flex flex-col gap-8'>
      <TodoEntry/>
      <TodoAllList/>
    </div>
  )
}

export default Todo