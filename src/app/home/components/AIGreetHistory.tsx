"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import sideAvatar from "../../../public/avatar/avatarSideHappy.png";
import sideAvatar from "@/public/avatar/avatarSideHappy.svg";

import MessageComponent from "./MessageComponent";
import { GenerateContentResult, GoogleGenerativeAI } from "@google/generative-ai";
import {
    startFetchUserMessage,
    startRecommendationFetch,
} from "../../../../redux/features/homePageSlice";
import { RootState, RootStateType } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export const AIGreetHistory = () => {
    // const isReportActive = useSelector((state:RootState)=>state.)
    // useEffect(() => {}, [isReportActive]);
    return (
        // row-span-2 md:col-span-2
        <div className="bg-black/10 relative backdrop-blur-3xl rounded-md p-4 col-span-1 h-full w-full overflow-hidden">
            <div className="flex justify-between relative h-12 w-full">
                <Image
                    src={sideAvatar}
                    alt="avatar"
                    className="absolute h-14 w-14 animate-bounce"
                />

                <button className="bg-[#010101]/30  absolute top-4 right-0 text-white px-4 py-1 rounded-md text-xs font-light">
                    Clear
                </button>
            </div>
            <div className="overflow-auto h-full space-y-3 pb-12 pt-2">
                {/* {aiMessages.map((message, index) => (
                    <MessageComponent key={index} message={message} />
                ))} */}
                <MessageComponent message={"It's nice to know you are enjoying the day."} />
                <MessageComponent
                    message={
                        "It was supposed to happen. Try not to worry too much. I know you can do it"
                    }
                />
                <MessageComponent
                    message={
                        "It seems you are having a pretty bad day. Keep your head up and look for better tomorrow. Remember I only exist to help you get better everyday."
                    }
                />
                <MessageComponent
                    message={
                        "It seems you are having a pretty bad day. Keep your head up and look for better tomorrow. Remember I only exist to help you get better everyday."
                    }
                />
                <MessageComponent
                    message={
                        "It seems you are having a pretty bad day. Keep your head up and look for better tomorrow. Remember I only exist to help you get better everyday."
                    }
                />
                <MessageComponent
                    message={
                        "It seems you are having a pretty bad day. Keep your head up and look for better tomorrow. Remember I only exist to help you get better everyday."
                    }
                />
            </div>
        </div>
    );
};

// export const MobileAIGreetHistory = () => {
//     return (
//         // row-span-2 md:col-span-2
//         <div className="bg-blue-400/30 col-span-1 h-full w-full">AIGreetHistory</div>
//     );
// };
