"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import googleIcon from "@/public/icons/googleIcon.svg";
import logo from "@/public/icons/LOGO.svg";
import { useDispatch } from "react-redux";
// import { toggleLoginPopup } from "../../redux/features/popupSlice";
import { signIn, useSession } from "next-auth/react";
// import { setUserForGoogleSignup } from "../../redux/features/userSlice";

const SignupPopup = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const dispatch = useDispatch();
    const deactivatePopup = (e: React.MouseEvent<HTMLDivElement>) => {
        //   dispatch(toggleLoginPopup());
    };
    const { data: session, status } = useSession();

    console.log({ data: session, status: status });

    const handleSignIn = async () => {
        setIsSigningIn(true);
        await signIn("google");
    };

    const sendUserData = async () => {
        if (status === "authenticated" && session?.user && isSigningIn) {
            // sendUserData();
            const res = await fetch("/api/googleSignin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(session.user),
            });
            console.log({ resForSignIn: res });

            if (res.ok) {
                //     dispatch();
                //   setUserForGoogleSignup({
                //       name: session.user.name || "",
                //       email: session.user.email || "",
                //       image: session.user.image || "",
                //   })
            }

            setIsSigningIn(false);
            // dispatch(toggleLoginPopup());
        }
    };

    useEffect(() => {
        sendUserData();
    }, [status, session]);

    // const sendUserData = async () => {
    //     // if (status === "authenticated") {

    //     const res = await fetch("/api/googleSignin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(session?.user),
    //     });
    //     console.log({ resForSignIn: res });
    //     // }
    // };

    // useEffect(() => {
    //     const userName = data?.user.name;
    //     const userEmail = data?.user.email;
    //     const userImage = data?.user.image;

    //     if (status === "authenticated") {
    //         // console.log("is authenticated");
    //         dispatch(
    //             setUserForGoogleSignup({
    //                 name: userName!,
    //                 email: userEmail!,
    //                 image: userImage || "",
    //             })
    //         );
    //     }
    // }, [data, status]);

    return (
        <>
            <div
                className="h-[100vh] w-[100vw] top-0 left-0 fixed bg-black/40 z-20"
                onClick={deactivatePopup}
            ></div>
            <div className="fixed z-30 top-[8%] md:top-[15%] left-[5%] sm:left-[15%] lg:left-[20%] xl:left-[30%] h-[70vh] w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[40%] bg-gray-200 p-4 md:p-8 py-4 md:py-12 flex flex-col items-center rounded-xl text-center min-h-[35rem]">
                <div>
                    <Image src={logo} alt="logo" className="h-24 w-24 md:h-20 md:w-32" />
                </div>
                <h1 className="text-lg lg:text-xl font-semibold mt-2 md:mt-10">Sign up</h1>

                <div className="text-sm font-light mt-6">
                    <p className="opacity-50 text-xs">
                        (We&apos;ll get only your name, email and profile image from your Google
                        account)
                    </p>
                </div>

                <div className="mt-[10%]">
                    <div
                        className="bg-gray-100 py-4 px-6 h-12 w-full flex items-center justify-center shadow-buttonShadow rounded-lg cursor-pointer gap-3"
                        onClick={handleSignIn}
                    >
                        <Image
                            src={googleIcon}
                            alt="google icon"
                            className="h-full w-auto bg-cover"
                        />
                        <div className=" select-none text-xs md:text-sm">Continue with Google</div>
                    </div>
                </div>
                <div className="flex w-[90%] mt-4 items-center gap-2 opacity-20">
                    <div className="w-full h-[2px] bg-black rounded-md"></div>
                    <div>or</div>
                    <div className="w-full h-[2px] bg-black rounded-md"></div>
                </div>
                <div className="mt-4">
                    <div className="bg-gray-400 py-4 px-6 h-10 w-full  flex items-center justify-center shadow-buttonShadow rounded-lg cursor-pointer gap-3">
                        <div className=" select-none text-xs md:text-sm">Continue as Guest</div>
                    </div>
                </div>

                <div className="text-sm font-light mt-16">
                    <p className="">You can either log in with Google or Continue as a Guest</p>
                    <p className="opacity-50 text-xs">
                        (Guests cannot interact with community posts and their history is not
                        recorded)
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignupPopup;
