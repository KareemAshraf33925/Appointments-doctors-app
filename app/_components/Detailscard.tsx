"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "sonner"
import { addapointment } from '../_context/Doctorslice';
// identifcation of data comming from store
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
// identifcation of information filter
interface select{
  selected:doc,
  date: string,
  hour:string, 
}

 function Detailscard({para}:{para:string}) {
  // get data from store
  const  doctors=useSelector((state:any)=>state.Doctors.doctors)
  // store data in state
    const [detail,setdetail]=useState<doc[]>([])
    // sction redux-toolkite
    const dispatch=useDispatch()
    // recover filter data
     useEffect(()=>{
      const popular=doctors.filter((pop:doc)=>pop.id === para)
      setdetail(popular)
      
     },[doctors,para])
    //  destriction data
     const [selectedDoctor]= detail.length >0 ?detail : [{} as doc]
    // get date
      const [date, setDate] = React.useState<Date | undefined>(new Date())
      // put date in array
      const [Dates,setdates]=useState<string[]>([])
      // store time selected
     const [selectedday,setselecteday]=useState<string>("");
    //  store the information appointment
      const [Appointmentselected,setappointment]=useState<select>({ selected:selectedDoctor, 
        date:"",
        hour:""})
      //  recover time
      useEffect(()=>{
       let dates:string[]=[]
         for(let hour=10 ; hour < 12 ; hour++){
          for(let minute=0 ; minute < 60 ; minute +=30){
            let formhour= hour > 12 ? hour -12 :hour;
            let amp ="am";
            let formminute = minute === 0 ? "00" : minute.toString();
            dates.push(`${formhour}:${formminute}${amp}`)
          }
        }
         for(let hour=13 ; hour < 17 ; hour++){
          for(let minute=0 ; minute < 60 ; minute +=30){
            let formhour= hour > 12 ? hour -12 :hour;
            let amp ="pm";
            let formminute = minute === 0 ? "00" : minute.toString();
            dates.push(`${formhour}:${formminute}${amp}`)
          }
        }
         
        setdates(dates)
      },[date])
      
  return (
    // start-detials
    <div>
      {/* alert detial of doctor to booking  */}
{detail.map((deta)=>(  <article className="flex bg-white transition hover:shadow-xl" key={deta.id}>
  <div className="hidden sm:block sm:basis-56">
    <img
      alt={deta.name}
      src={deta.image}
      className="aspect-square h-full w-full object-cover "
      width={200}
      height={200}
      
    />
  </div>

  <div className="flex flex-1 flex-col justify-between items-start py-2.5 ">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold text-gray-900 uppercase">
         {deta.name}
        </h3>
      </a>
         <p className="text-sm text-gray-700 my-1.5">
         Appointment:{deta.date}
        </p>
         <p className="text-sm text-gray-700 my-1.5">
        Time:{deta.time}
        </p>
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
      {deta.description}
      </p>
    </div>

    <div className=" sm:flex sm:items-end sm:justify-end ml-3">
     
  <div className='bg-cyan-700 text-primary-foreground shadow-xs hover:bg-cyan-500 cursor-pointer p-1.5 rounded-xl'>      
  <Dialog>
  <DialogTrigger>Booking Appointment</DialogTrigger>
  <DialogHeader>
   <DialogTitle></DialogTitle>
  </DialogHeader>
  
  <DialogContent>
    <p>Booking Appoinment</p>
      <div className='flex justify-center items-center  gap-3 pt-5 flex-col
      md:flex-row
      md:items-start '>
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      disabled={{before:new Date()}}
  
    />
      
     
        <div className="grid grid-cols-4 gap-2.5 
        md:grid-cols-2">
        {Dates.map((date,index)=>(
          <span className={`${date === selectedday ? "bg-cyan-500 text-primary-foreground shadow-xs cursor-pointer p-1.5 rounded-xl":"block bg-cyan-700 text-primary-foreground shadow-xs hover:bg-cyan-500 cursor-pointer p-1.5 rounded-xl"}
            `} key={index}
          onClick={()=>setselecteday(date)}
          >{date}</span>
        ))}
        </div>
      
    </div>
    <Button disabled={!(date && selectedday)}
      onClick={() =>{
       const newAppointment = {
    ...Appointmentselected,
    date:new Date().toISOString(),
    hour: selectedday,
    selected: selectedDoctor,
  };
  setappointment(newAppointment);
  dispatch(addapointment(newAppointment));
      
     return   toast("Success Send Appointment ", {
          description:`${date} ${selectedday}`,
          action: {
            label: "close",
            onClick: () => console.log(selectedday),
          },
        })}
      }
    >Booking Appoinment</Button>
  </DialogContent>
</Dialog>
    </div>
    </div>
  </div>
</article>))}


    </div>
  )
}

export default Detailscard