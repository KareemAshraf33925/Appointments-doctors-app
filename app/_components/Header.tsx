"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
// import {LogoutLink, LoginLink ,} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
// import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// identification type of menue of header
type Menue={
    id:number;
    name:string;
    pathe:string;
}[]
// start header
function Header() {
  // get data of user
    // const {user} = useKindeBrowserClient();
   

    const menue:Menue=[{
        id:1,
        name:"Home",
        pathe:"/"
    },
{
        id:2,
        name:"About",
        pathe:"/about"
    },
{
        id:3,
        name:"Appointment",
        pathe:"/appointment"
    }]
  return (
    // start-header
    <div className=' flex 
    items-center gap-3  shadow-md
    md:justify-between  md:px-10 md:py-1.5 
    '>
        <div className='flex  items-center  md:gap-3  sm:gap-0'>
        <img src={"/Appointments-doctors-app/assets/logo.png"} alt='logo' width={80} height={80}/>
        <ul className="navList flex gap-5">
          {/* Alert Date fo menue */}
            {menue.map((menu)=>( <Link key={menu.id} href={menu.pathe}><li
            className='hover:scale-125 transition-all duration-300' >{menu.name}</li></Link>
        ))}
        </ul>
        </div>
        {/* start popover of user */}
        {/* {user?
       ( <Popover>
      <PopoverTrigger asChild>
        <Image src={user?.picture as string} alt={user?.family_name as string}
        width={50}
        height={50}
        className='rounded-full cursor-pointer'></Image>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ul>
            <li className='my-2.5 '><p className=' text-lg'> Hellow {user.given_name}</p></li>
             <li className='my-2.5 '>{user.email}</li>
            <li className='my-2.5'> <LogoutLink><Button>Sign up</Button></LogoutLink></li>
        </ul>
      </PopoverContent>
    </Popover>):<LoginLink><Button>Get Start</Button></LoginLink>} */}
        {/* end-popover of user */}
       <Button>Get Start</Button>
    </div>
    // end-header
  )
}

export default Header