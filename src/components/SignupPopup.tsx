"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import googleIcon from "@/public/icons/googleIcon.svg";
import logo from "@/public/icons/LOGO.svg";
import { useDispatch } from "react-redux";
import { toggleLoginPopup } from "../../redux/features/popupSlice";
import { setUserForBackendConfirmation, setUserForGoogleSignup } from "../../redux/features/userSlice";
import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../firebase";

const SignupPopup = () => {
    const dispatch = useDispatch();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const auth = getAuth(app);
    const router = useRouter();

    const deactivatePopup = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(toggleLoginPopup());
    };

    const handleGoogleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSigningIn(true);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            const { email, displayName, photoURL } = resultFromGoogle.user;

            const userData = {
                email: email,
                name: displayName,
                avatar: photoURL,
            };

            const res = await axios.post("/api/googleSignin", userData);

            if (res.status === 200) {
                router.push("/home");
                dispatch(setUserForBackendConfirmation(res.data.user));
                dispatch(toggleLoginPopup());
            }
        } catch (error: any) {
            setError("Error during Google sign-in. Please try again.");
            console.error("Error during Google sign-in:", error);
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <>
            <div
                className="h-[100vh] w-[100vw] top-0 left-0 fixed bg-black/40 z-20"
                onClick={deactivatePopup}
            ></div>
            <div className="fixed z-30 top-[8%] md:top-[15%] left-[5%] sm:left-[15%] lg:left-[20%] xl:left-[30%] h-[70vh] w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[40%] bg-gray-200 p-4 md:p-8 py-4 md:py-12 flex flex-col items-center rounded-xl text-center min-h-[35rem]">
                <div>
                    <Image
                        src={logo}
                        alt="logo"
                        className="h-24 w-24 md:h-20 md:w-32"
                    />
                </div>
                <h1 className="text-lg lg:text-xl font-semibold mt-2 md:mt-10">
                    Sign up
                </h1>

                <div className="text-sm font-light mt-6">
                    <p className="opacity-50 text-xs">
                        (We&apos;ll get only your name, email and profile image from your Google account)
                    </p>
                </div>

                <div className="mt-[10%]">
                    <button
                        className={`bg-gray-100 py-4 px-6 h-12 w-full flex items-center justify-center shadow-buttonShadow rounded-lg cursor-pointer gap-3 ${isSigningIn ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleGoogleClick}
                        disabled={isSigningIn}
                        aria-label="Sign in with Google"
                    >
                        <Image
                            src={googleIcon}
                            alt="Google icon"
                            className="h-full w-auto bg-cover"
                        />
                        <div className="select-none text-xs md:text-sm">
                            {isSigningIn ? 'Signing in...' : 'Continue with Google'}
                        </div>
                    </button>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                <div className="flex w-[90%] mt-4 items-center gap-2 opacity-20">
                    <div className="w-full h-[2px] bg-black rounded-md"></div>
                    <div>or</div>
                    <div className="w-full h-[2px] bg-black rounded-md"></div>
                </div>

                <div className="text-sm font-light mt-16">
                    <p>You can either log in with Google or Continue as a Guest</p>
                    <p className="opacity-50 text-xs">
                        (Guests cannot interact with community posts and their history is not recorded)
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignupPopup;
