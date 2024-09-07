import React from "react";
import logo from "@/public/icons/LOGO.svg";
import Image from "next/image";

export default function Try() {
   return (
      <div className="">
         <Image
            src={logo}
            className="logo h-[5vh] sm:h-[5vh] md:h-[5vh] object-contain "
            alt=""
         />
      </div>
   );
}
