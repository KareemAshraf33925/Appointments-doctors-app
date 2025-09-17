import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Link from 'next/link'
function Categorylist() {
  return (
    <div>
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
       <Link href={'/search/skin'}>
      <CommandItem>
       
         <img src={"/Appointments-doctors-app/assets/images/categorys/doctor-performing-facial-injections.png"} 
              className='cursor-pointer'
              alt='doctor-performing-facial-injections' width={100} height={100} />
              Skin
        </CommandItem>
        </Link>
         <Link href={'/search/blood'}>
      <CommandItem>
        <img src={"/Appointments-doctors-app/assets/images/categorys/Hematology.png"} 
         className='cursor-pointer'
        alt='Hematology' width={100} height={100} />
        Blood</CommandItem>
        </Link>
        <Link href={'/search/lungs'}>
      <CommandItem>
        <img src={"/Appointments-doctors-app/assets/images/categorys/istockphoto (2).png"} 
         className='cursor-pointer'
        alt='istockphoto2' width={100} height={100} />
        Lungs
      </CommandItem>
      </Link>
      <Link href={'/search/eyes'}>
      <CommandItem>
        <img src={"/Appointments-doctors-app/assets/images/categorys/istockphoto.png"} 
         className='cursor-pointer'
        alt='istockphoto' width={100} height={100} />
        Eyes
      </CommandItem>
      </Link>
      <Link href={'/search/stomach'}>
      <CommandItem>
          <img src={"/Appointments-doctors-app/assets/images/categorys/lOshfbHtd5tvm7qi.png"} 
           className='cursor-pointer'
          alt='lOshfbHtd5tvm7qi' width={100} height={100} />
        Stomach
      </CommandItem>
      </Link>
      <Link href={'/search/brain'}>
       <CommandItem>
         <img src={"/Appointments-doctors-app/assets/images/categorys/neurosurgeon.png"}
              className='cursor-pointer'
              alt='neurosurgeon.jpg' width={100} height={100} />
        Brain
       </CommandItem>
       </Link>
    </CommandGroup>
  </CommandList>
</Command>
    </div>
  )
}

export default Categorylist