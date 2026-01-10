import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const TodoDataContext=createContext()

const TodoContext = ({children}) => {

    const [TodoData, setTodoData] = useState(()=>{
        let storedTask = localStorage.getItem("task")
        return storedTask ? JSON.parse(storedTask):[]
    })


    useEffect(()=>{
        localStorage.setItem("task",JSON.stringify(TodoData))
    },[TodoData])
  return (
    <div>
        <TodoDataContext value={{TodoData,setTodoData}}>
            {children}
        </TodoDataContext>
    </div>
  )
}

export default TodoContext