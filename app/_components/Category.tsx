"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// identifcation of data comming from store
interface doc{
   id:number;
    name:string;
    description:string;
    image:string;
    date:string;
    time:string;
     popular:string;
    category:string;
}
function Category({category}:{category:string}) {
      // get data from store
  const  doctors=useSelector((state:any)=>state.Doctors.doctors)
  // state of filter data
    const [filter,setfilter]=useState<doc[]>([])
    // use effect to filter information to get data
     useEffect(()=>{
      const Filter=doctors.filter((pop:doc)=>pop.category === category)
      setfilter(Filter)
      console.log(category)
     },[doctors,category])
  return (
    
          <div className='translate-y-20'>
        <h2 className='text-blue-950 text-4xl font-bold'>Doctors</h2>
         <div className='grid gap-10 md:grid-cols-3 sm:grid-cols-1 my-10'>
        {filter.map((doctor:doc)=>(
<div className="group relative block bg-black h-[400px]" key={doctor.id}>
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
        className="translate-y-8 transform opacity-0 transition-all 
        group-hover:opacity-100
        group-hover:duration-500
        group-hover:-translate-y-28
        md:group-hover:-translate-y-64
        "
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

           
        ))}
         </div>
    </div>
    
  )
}

export default Category