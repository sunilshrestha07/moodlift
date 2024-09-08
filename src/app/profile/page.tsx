"use client"

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Link from "next/link";

export default function Component() {
    const currentUser = useSelector((state: RootState) => state.userSlice);
   return (
      <div className=" flex justify-center items-center mt-16 ">
         <div className=" w-[85%] flex justify-center  rounded-md overflow-hidden">
            <div className="flex  flex-col items-center justify-center  w-[45%] bg-white rounded-lg">
                <div className=" mt-10">
                    <img className=" w-40 aspect-square object-cover rounded-full" src={currentUser.avatar} alt="" />
                </div>
                <div className=" flex flex-col items-center justify-center mt-10">
                    <p>{currentUser.name}</p>
                    <p>{currentUser.email}</p>
                </div>
                <div className=" w-full flex justify-center px-10 my-10">
                    <div className="">
                        <Link href={"/verify"}><p className="px-5 py-1 rounded-md bg-button">Verify as a professional</p></Link>
                    </div>
                </div>
            </div>
         </div>
      </div>
   );
}
