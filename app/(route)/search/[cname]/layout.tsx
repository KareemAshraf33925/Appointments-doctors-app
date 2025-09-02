import Categorylist from '@/app/_components/Categorylist';
import React from 'react'

function layout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid gap-10  grid-cols-1 md:grid-cols-4'>
        <div className='md:col-span-1 '><Categorylist/></div>
        <div className='md:col-span-3'>{children}</div>
         
        
        </div>
  )
}

export default layout