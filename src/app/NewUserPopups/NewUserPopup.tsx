import Image from "next/image";
import React from "react";
import avatarFront from "@/public/avatar/avatarFrontHappy.svg";

const NewUserPopup = () => {
    return (
        <>
            <div className="fixed top-0 right-0 w-[100%] h-[100%] z-20 bg-black/15 backdrop-blur-md px-[5vw] py-[10vh] md:px-[8vw] md:pt-[15vh] ">
                <div className="h-full w-full bg-black/10 absolute px-[5vw]"></div>
                <div className=" space-y-5 ">
                    <div className="flex gap-4 items-center justify-center">
                        <Image
                            src={avatarFront}
                            alt="avatar"
                            className="h-20 w-20 md:h-32 md:w-32 animate-bounce"
                        />

                        <div className="bg-white px-4 py-3 md:px-6 md:py-6 rounded-xl">
                            <h1 className=" text-lg font-semibold">Hi there</h1>
                            <p className="text-xs md:text-sm">
                                I’m Bruno. I’ll ask you some questions everyday to record and I’ll
                                give you recommendation and feedback accordingly.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-3 md:px-6 md:py-6 rounded-xl">
                        {/* <h1 className=" text-lg font-semibold">Hi there</h1> */}
                        <p className="text-xs md:text-sm">
                            Before that, please complete the given process
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewUserPopup;
