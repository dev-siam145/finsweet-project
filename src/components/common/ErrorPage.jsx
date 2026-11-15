import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-center text-[120px] font-bold'>404 not found</h1>
            <NavLink to="/" className={"bg-primary text-black px-10 py-5 mx-auto"}>ঘরে ফিরে যাও</NavLink>
        </div>
    </div>
  )
}

export default ErrorPage