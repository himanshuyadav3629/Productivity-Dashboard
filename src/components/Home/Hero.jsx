import React from 'react'

const Hero = () => {
  return (
    <div className='h-40 w-full bg-[conic-gradient(from_var(--rotate),var(--primary),var(--dark-blue))] animate-[rot_3s_linear_infinite] flex justify-center items-center rounded-2xl'>
        <div className='h-38 w-[98%] bg-[url(https://images.unsplash.com/photo-1715626397744-bf5ee664e097?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex flex-col justify-center items-center rounded-2xl'>
        <h5 className='text-2xl text-white'>05 JAN</h5>
        <h2 className='text-5xl text-white'>12:42:15</h2>
        <h5 className='text-2xl text-white'>Saturday</h5>
        </div>
    </div>
  )
}

export default Hero