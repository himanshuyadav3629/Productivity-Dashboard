import React, { useContext } from 'react'
import { TodoDataContext } from '../../context/Todo/TodoContext'

const List = (props) => {
    let data = useContext(TodoDataContext)
  return (
    <div className='h-fit w-full border-4 rounded-3xl border-white p-1 flex flex-col items-center gap-4'>
        <div className='flex gap-4'>
            <h1 className='text-4xl'>{props.info.Todoname}</h1>
            <h4  className='h-fit w-fit bg-red-400 rounded-2xl p-1'>{props.info.isImp?"IMP":""}</h4>
        </div>
        <div className='w-fit'>
            <button className='w-fit bg-sky-900 px-4 py-2 rounded-full active:scale-85' onClick={()=>{
                // console.log(props.id)
                // console.log(data.TodoData)
                const modifiedTodo = [...data.TodoData]
                modifiedTodo.splice(props.id,1)
                data.setTodoData(modifiedTodo)
            }}>MARK AS COMPLETED</button>
        </div>
    </div>
  )
}

export default List