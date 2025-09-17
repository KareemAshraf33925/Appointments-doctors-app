"use client"
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { doc } from '@/app/_context/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { remove } from '../_context/Doctorslice';
const Appointment = () => {
  // get data from the store
    const appointmentDates=useSelector((state:any)=>state.Doctors.appointments);
    const length=useSelector((state:any)=>state.Doctors.appointments.length)
    // used dispatch 
    const dispatch=useDispatch()
    // const {user}=useKindeBrowserClient();
    if(length === 0){
      return <h1 className='mt-10 ml-10 text-4xl text-cyan-800'>Empty</h1>
    }
    
  return (
    <div>
      
        {appointmentDates.map((appoint:{
          id:number
          selected:doc,
          hour:string, 
          },index:number)=>(
        <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
                    key={index}>
  <div className="flex justify-start gap-4 lg:gap-3
  items-start
  ">
    <div className='flex flex-col gap-3 md:flex-row'>
    <div className="sm:order-first sm:shrink-0">
      <img
        alt={appoint.selected.name}
        src={appoint.selected.image}
        className="size-16 rounded-full object-cover sm:size-[72px]"
        width={200}
        height={200}
      />
    </div>
<div className='flex justify-center flex-col '>
    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg font-medium text-pretty text-gray-900">
        {appoint.selected.name}
      </h3>
      <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
       {appoint.selected.description}
      </p>
   <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
   patient: {/* patient:{user?.given_name} */}
      </p>
   
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div className="flex items-center gap-2">
      <dt className="text-gray-700">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      </dt>
            <dd className="text-xs text-gray-700">{appoint.selected.date}</dd>
    <div className="flex items-center gap-2">
      <dt className="text-gray-700">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">{appoint.hour}</dd>
    </div>
    </div>
  </dl>
   </div>
   </div>
           <button className="block text-cyan-700  shadow-xs text-2xl cursor-pointer
           rotate-45
           hover:text-cyan-800
           "
          
           onClick={()=>dispatch(remove(index))
              }>+</button>

  </div>
</a>
        ))}

    </div>
  )
}

export default Appointment;