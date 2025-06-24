import React from 'react'
import { NavLink } from 'react-router'

export default function Page_Not_Found() {
  return (
    <div className='h-screen flex justify-center items-center'>
        
      <div className="flex flex-col items-center">
          <h1 className="font-medium text-[110px] mb-[40px]">404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <button className="bg-red-500 mt-[144px] p-5 mb-[16px] text-white cursor-pointer active:bg-red-600"><NavLink to='/'>Back to Homepag</NavLink>e</button>
        </div>
    </div>
  )
}
