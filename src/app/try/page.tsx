"use client"

import React from 'react'
import logo from "@/public/icons/LOGO.svg";
import Oauth from '@/components/Oauth';
import SignupPopup from '@/components/SignupPopup';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
// import SignIn from '../api/auth/signin';




export default function page() {
  const isPopupVisible = useSelector((state: RootState) => state.popupReducer.isLoginPopupOpen)
  return (
    <>
    <div className="">
        <img className='w-40 aspect-square' src={logo} alt="" />
       {/* <SignIn/> */}
       {/* <Oauth/> */}
       {/* <SignupPopup/> */}
       {/* {isPopupVisible && <SignupPopup/>} */}
    </div>
    </>
  )
}
