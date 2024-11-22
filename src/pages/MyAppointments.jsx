import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

import { index } from 'mathjs'


const MyAppointments = () => {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-white border-b'>My appointments</p>
      <div>
        {doctors.slice(0,3).map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt='' />
            </div>
            <div className='flex-1 text-sm text-white'>
              <p className='text-white font-semibold' >{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-white font-medium mt-1'>Address:</p>
              <p className='text-x5 '>{item.address.line1}</p>
              <p className='text-x5'>{item.address.line2}</p>
              <p className='text-x5 mt-1'><span className='text-sm text-white font-medium'>Date & Time:</span> 25, July, 2024 | 8:30 PM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
