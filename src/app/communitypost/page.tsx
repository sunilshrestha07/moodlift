"use client";

import MakePost from "@/components/MakePost";
import React from "react";
import trophy from "@/public/trophy.png";
import Image from "next/image";
import SignupPopup from "@/components/SignupPopup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function page() {
    const loginPopupStatus = useSelector(
        (state: RootState) => state.popupSlice.isLoginPopupOpen
      );

      const currentUser = useSelector((state: RootState) => state.userSlice);
    return (
        <>
            <div className="  w-full h-full mt-5 flex flex-row justify-center ">
            {!currentUser && loginPopupStatus && <SignupPopup />}
                <div className=" bg-[#F9F9FF]  sm:w-[85%] h-full rounded-md flex flex-row justify-center">
                    <MakePost />
                </div>
            </div>
        </>
    );
}
