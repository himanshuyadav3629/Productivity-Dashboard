import React, { useContext } from 'react'
import List from './List'
import { TodoDataContext } from '../../context/Todo/TodoContext'


const TodoAllList = () => {
   let data = useContext(TodoDataContext)
   console.log(data.TodoData)
   

    return (
        <div className='h-fit w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] flex justify-center items-center rounded-3xl p-1 '>
            <div className='h-fit w-full flex flex-col gap-4 bg-sky-600 rounded-3xl overflow-hidden text-white'>
             {data.TodoData.map((elem,idx)=>{
                return <List key={idx} id={idx} info={elem} />
             })}
            </div>
        </div>
    )
}

export default TodoAllList