"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Search() {
  return (
    // start-category
    <div className='flex justify-center items-center flex-col gap-20 translate-y-20
    md:items-start'>
        <h2 className='text-4xl font-bold  text-blue-950'> <span className='text-black'> Search</span> Category</h2>
   
    <div className='flex flex-col
    justify-center items-center  gap-5 translate-1 pb-10
    md:flex-row
  
   '>
     <Link href={`/search/skin`} >
      <img src={"/Appointments-doctors-app/assets/images/categorys/doctor-performing-facial-injections.png"} 
      className='cursor-pointer hover:scale-110 hover:duration-500'
      alt='doctor-performing-facial-injections' width={180} height={200} />
      </Link>
       <Link href={`/search/blood`} >
      <img src={"/Appointments-doctors-app/assets/images/categorys/Hematology.png"} 
       className='cursor-pointer hover:scale-110 hover:duration-500'
      alt='Hematology' width={180} height={200} />
      </Link>
      <Link href={`/search/lungs`} >
      <img src={"/Appointments-doctors-app/assets/images/categorys/istockphoto (2).png"}
      className='cursor-pointer hover:scale-110 hover:duration-500'
      alt='istockphoto2' width={180} height={200} />
      </Link>
      <Link href={`/search/eyes`} >
      <img src={"/Appointments-doctors-app/assets/images/categorys/istockphoto.png"} 
      className='cursor-pointer hover:scale-110 hover:duration-500'
      alt='istockphoto' width={180} height={200} />
      </Link>
     <Link href={`/search/stomach`} >
      <img  src={"/Appointments-doctors-app/assets/images/categorys/lOshfbHtd5tvm7qi.png"} 
       className='cursor-pointer hover:scale-110 hover:duration-500'
     alt='lOshfbHtd5tvm7qi' width={180} height={200} />
     </Link>
    <Link href={`/search/brain`} >
      <img src={"/Appointments-doctors-app/assets/images/categorys/neurosurgeon.png"}
      className='cursor-pointer hover:scale-110 hover:duration-500'
      alt='neurosurgeon.jpg' width={180} height={200} />
    </Link>
    </div>
    </div>
  )
  // end-category
}

export default Search