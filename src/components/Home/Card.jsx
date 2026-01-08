import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Card = (props) => {
  let navigate=useNavigate()
  return (
    <div onClick={()=>{
      navigate(props.route)
    }} style={{backgroundImage:`url(${props.image})`}} className={`h-50 w-38  border-4 border-sky-800 rounded-2xl bg-cover bg-center flex justify-center items-end`}>
        <h3 className='text-blue-800'>{props.name}</h3>
    </div>
  )
  // 
}

export default Card