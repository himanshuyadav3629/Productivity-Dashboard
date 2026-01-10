import React, { useContext } from 'react'
import { useState } from 'react'
import { TodoDataContext } from '../../context/Todo/TodoContext'



const TodoEntry = () => {

    let data = useContext(TodoDataContext)
    console.log(data)
    const [Todoname, setTodoname] = useState('')
    const [isImp, setisImp] = useState(false)



    function FormHandler(e){
        e.preventDefault()
        data.setTodoData([...data.TodoData,{Todoname,isImp}])
       
    }
    return (
        <div className='h-fit w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] flex justify-center items-center rounded-3xl p-1'>
        <div className=' h-fit bg-sky-600 text-2xl text-white p-3  rounded-3xl'>
            <form className='flex flex-col items-center gap-8' onSubmit={(e)=>{FormHandler(e)}}>
                <div>
                    <label htmlFor="task-name">ENTER YOUR TASK</label>
                    <input required onChange={(e)=>{setTodoname(e.target.value)}}  className='w-full border-4 outline-0  border-sky-200 rounded-3xl p-4 text-xl' type="text" placeholder='ENTER TASK' id="task-name" value={Todoname} />
                </div>
                <div>
                    <label htmlFor="task-detail">ENTER YOUR TASK</label>
                    <textarea className='w-full h-40  border-4 outline-0  border-sky-200 rounded-3xl p-4 text-xl' placeholder='ENTER DETAILS' id="task-detail"></textarea>
                </div>
                <div className='flex gap-4'>
                    <input onClick={(e)=>{setisImp(e.target.checked)}}  className='w-5' type="checkbox" id='imp'/>
                    <label htmlFor="imp">MARK AS IMPORTANT</label>
                </div>
                    <button className='w-fit bg-sky-900 px-8 py-4 rounded-full active:scale-85'>ADD TASK</button>
            </form>
        </div>
        </div>
    )
}

export default TodoEntry