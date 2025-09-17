import React from 'react';
import Detailscard from '../../_components/Detailscard';
import Popular from '@/app/_components/Popular';

interface Params {
  id: string;
}

interface Props {
  params: Promise<Params>;
}

export async function generateStaticParams() {
 
  
  const ids = ['1', '2', '3', '4', '5', '6']; 

  return ids.map((id) => ({
    id,
  }));
}

export default async function Details({ params }: Props) {
  const { id } = await params;

  return (
    <div className='flex justify-center items-start px-10 gap-10 my-16 flex-col md:flex-row'>
      <Detailscard para={id} />
      <Popular />
    </div>
  );
}