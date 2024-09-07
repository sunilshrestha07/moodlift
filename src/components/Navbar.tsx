"use client";
import React from "react";
import { navbarPadding } from "@/app/globalStyles";
// import circle from "./images/circle.jpg";
import logo from "@/public/icons/LOGO.svg";
import Image from "next/image";

const Navbar = () => {
    const paddingforPage = ``;
    return (
        <>
            <div className={`${navbarPadding} sticky top-0 z-50 `}>
                <header className="relative w-full min-w-min box-border bg-white mt-4 rounded-[90px] md:rounded-[99px] shadow-navbarShadow ">
                    <div className="md:px-1 lg:px-4 ">
                        <div className="  object-contain flex justify-between  items-center ">
                            <a href="/" className="md:flex-shrink-0">
                                <Image
                                    src={logo}
                                    className="logo h-[5vh] sm:h-[5vh] md:h-[5vh] object-contain "
                                    alt=""
                                />
                            </a>

                            <nav className="w-auto ml-0  xl:ml-auto      lg:mr-[10vw]  ">
                                <ul className="nav-items flex  md:ml-0 lg:gap-x-[20%] md:gap-x-4 gap-x-2 text-black  items-center">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-blue-600 text-xs lg:text-base"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className=" hover:text-blue-600 text-xs lg:text-base"
                                        >
                                            Community
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-blue-600 text-xs lg:text-base"
                                        >
                                            Meditation
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="gapper flex items-center gap-x-2 sm:gap-x-4  lg:gap-x-4 py-1">
                                <button className="bg-[#6F5FFF] rounded-lg px-3 md:px-[3vw] lg:px-11 py-2  text-white flex items-center text-xs sm:text-base">
                                    Login
                                </button>
                                {/* */}
                                <div className="rounded-full box-border w-11 h-11 sm:w-12 sm:h-12 bg-[#D9D9D9]">
                                    {/* <Image
                    src={circle}
                    className="rounded-full w-full h-full object-cover"
                    alt="Circle"
                  /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
