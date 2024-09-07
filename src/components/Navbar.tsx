"use client";
import React, { useState } from "react";
import logo from "@/public/icons/LOGO.svg";
import Image from "next/image";
import userSvg from "@/public/icons/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginPopup } from "../../redux/features/popupSlice";
import { setActivePage } from "../../redux/features/pagesSlice";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { navbarPadding } from "@/app/globalStyles";

const Navbar = () => {
    const dispatch = useDispatch();
    const toggleLoginPopupFunction = () => {
        dispatch(toggleLoginPopup());
    };

<<<<<<< HEAD
    const userData = useSelector((state: RootState) => state.userReducer);
=======
  const userData = useSelector((state: RootState) => state.userSlice);
>>>>>>> 972e1b747e0be4dab67e946bb60f96a045345441

    // State to manage the dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSvgClick = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
    };

    return (
        <div className={`${navbarPadding} sticky top-4 z-50`}>
            <header className="relative w-full min-w-min box-border bg-white mt-4 rounded-[90px] md:rounded-[99px]">
                <div className="px-2 py-1 md:px-3">
                    <div className="object-contain flex justify-between items-center relative">
                        <Link
                            href="/"
                            className="flex-shrink-0"
                            onClick={() => dispatch(setActivePage("/"))}
                        >
                            <Image
                                src={logo}
                                className="logo h-[4vh] md:h-[5vh] min-h-[2rem] w-auto object-contain"
                                alt="Logo"
                            />
                        </Link>

                        <nav className="w-auto h-[4vh] min-h-[2.5rem] flex ml-0 xl:ml-auto lg:mr-[10vw]">
                            <ul className="nav-items flex md:ml-0 lg:gap-x-[20%] md:gap-x-4 gap-x-2 text-black items-center">
                                <li>
                                    <Link
                                        href="/home"
                                        className="hover:text-blue-600 text-xs lg:text-base"
                                        onClick={() => dispatch(setActivePage("/home"))}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/communitypost"
                                        className="hover:text-blue-600 text-xs lg:text-base"
                                        onClick={() => dispatch(setActivePage("/communitypost"))}
                                    >
                                        Community
                                    </a>
                                </li>
                                <li className="hidden sm:block">
                                    <a
                                        href="#"
                                        className="hover:text-blue-600 text-xs lg:text-base"
                                        onClick={() => dispatch(setActivePage("#"))}
                                    >
                                        Meditation
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="gapper flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-4">
                            <button
                                className="hidden sm:block bg-[#6F5FFF] rounded-lg px-3 md:px-[3vw] lg:px-11 py-2 text-white items-center text-xs sm:text-sm"
                                onClick={toggleLoginPopupFunction}
                            >
                                Login
                            </button>

<<<<<<< HEAD
                            <div className="rounded-full box-border w-8 h-8 sm:w-10 sm:h-10 bg-[#D9D9D9]">
                                {(userData.isAuthenticated && (
                                    <Image
                                        src={userData.avatar}
                                        className="rounded-full w-full h-full object-cover"
                                        alt="User Image"
                                    />
                                )) || (
                                    <Image
                                        src={userSvg}
                                        className="rounded-full h-[100%] w-[100%] object-contain"
                                        alt="User Icon"
                                    />
                                )}
                            </div>
=======
              <div className="rounded-full box-border w-8 h-8 sm:w-10 sm:h-10 bg-[#D9D9D9]">
                {(userData.avatar && (
                  <img
                    src={userData.avatar}
                    className="rounded-full w-full h-full object-cover"
                    alt="User Image"
                  />
                )) || (
                  <img
                    src={userSvg}
                    className="rounded-full h-[100%] w-[100%] object-contain"
                    alt="User Icon"
                  />
                )}
              </div>
>>>>>>> 972e1b747e0be4dab67e946bb60f96a045345441

                            <button
                                className="cursor-pointer right-2 mt-1 text-xl sm:hidden"
                                onClick={handleSvgClick}
                            >
                                <span className="sr-only">Toggle Menu Navigation</span>
                                <svg
                                    width="1.2em"
                                    height="1.6em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6H20M4 12H20M4 18H20"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* This is the dropdown menu */}
                        {isDropdownOpen && (
                            <div className="flex flex-col absolute top-full left-0 mt-2 w-full bg-white rounded-lg p-4 sm:hidden z-50">
                                <a
                                    href="#"
                                    className="hover:text-blue-600 text-xs lg:text-base mb-2"
                                >
                                    Meditation
                                </a>
                                <button
                                    className="bg-[#6F5FFF] rounded-lg px-3 py-2 text-white text-xs sm:text-sm"
                                    onClick={toggleLoginPopupFunction}
                                >
                                    Login
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
