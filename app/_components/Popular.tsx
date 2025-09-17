"use client"
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// identifcation of data from the store
interface doc{
   id:string;
    name:string;
    description:string;
    image:string;
    date:string;
    time:string;
     popular:string;
    category:string;
}
// start-popular
export default function Popular() {
  // get data from the store
     const  doctors=useSelector((state:any)=>state.Doctors.doctors)
    //  set data in the state
      const [popul,setpopul]=useState([])
      // filter data by use effect
       useEffect(()=>{
        const popular=doctors.filter((pop:doc)=>pop.popular ==="popular")
        setpopul(popular)
       },[doctors])
  return (
    // start popular
     <div className='translate-y-0'>
            <h2 className='text-blue-950 text-4xl font-bold'>Popular </h2>
             <div className='grid gap-10  md:grid-cols-1 sm:grid-cols-1 my-5 h-96 overflow-y-scroll'>
            {popul.map((doctor:doc)=>(
    <div className="group relative block bg-black h-[400px]"  key={doctor.id}>
      <img
        alt={doctor.name}
        src={doctor.image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity
         group-hover:opacity-50 
         group-hover:duration-700"
          width={200}
          height={200}
      />
    
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-lg font-bold text-white sm:text-2xl">{doctor.name}</p>
    
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-23 group-hover:opacity-100
            group-hover:duration-500
            md:group-hover:-translate-y-56"
          >
             <p className="text-sm text-white my-1.5">
             Appointment:{doctor.date}
            </p>
             <p className="text-sm text-white my-1.5">
            Time:{doctor.time}
            </p>
            <p className="text-sm text-white my-1.5">
             {doctor.description}
            </p>
            <Link href={`/details/${doctor.id}`}>
            <Button>
              Book Now
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    //end popular  
            ))}
             </div>
        </div>
  )
}
