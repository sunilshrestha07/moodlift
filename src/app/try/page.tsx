import React from 'react'
import logo from "@/public/icons/LOGO.svg";
import Oauth from '@/components/Oauth';
// import SignIn from '../api/auth/signin';




export default function page() {
  return (
    <>
    <div className="">
        <img className='w-40 aspect-square' src={logo} alt="" />
       {/* <SignIn/> */}
       <Oauth/>
    </div>
    </>
  )
}
