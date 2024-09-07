"use client";
import React from "react";
// import circle from "./images/circle.jpg";
import logo from "@/public/icons/LOGO.svg";
import Image from "next/image";
import userSvg from "@/public/icons/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginPopup } from "../../redux/features/popupSlice";
import { setActivePage } from "../../redux/features/pagesSlice";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { navbarPadding, pagePadding } from "@/app/globalStyles";

//just for change

const Navbar = () => {
  const paddingforPage = ``;
  const dispatch = useDispatch();
  const toggleLoginPopupFunction = () => {
    dispatch(toggleLoginPopup());
  };

  const userData = useSelector((state: RootState) => state.userReducer);

  return (
    <>
      <div className={navbarPadding}>
        <header className="relative w-full min-w-min box-border bg-white mt-4 rounded-[90px] md:rounded-[99px]  ">
          <div className="px-2 py-1 md:px-3  ">
            <div className="  object-contain flex justify-between  items-center ">
              <Link
                href="/"
                className=" flex-shrink-0"
                onClick={() => dispatch(setActivePage("/"))}
              >
                <Image
                  src={logo}
                  className="logo h-[4vh] md:h-[5vh] min-h-[2rem] w-auto object-contain "
                  alt=""
                />
              </Link>

              <nav className="w-auto h-[4vh] min-h-[2.5rem] flex  ml-0  xl:ml-auto lg:mr-[10vw]  ">
                <ul className="nav-items flex  md:ml-0 lg:gap-x-[20%] md:gap-x-4 gap-x-2 text-black  items-center">
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
                      className=" hover:text-blue-600 text-xs lg:text-base"
                      onClick={() => dispatch(setActivePage("/communitypost"))}
                    >
                      Community
                    </a>
                  </li>
                  <li className="hidden sm:block peer-checked:block">
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

              <div className="gapper flex items-center gap-x-2 sm:gap-x-4  lg:gap-x-4 ">
                <button
                  className="hidden sm:block peer-checked:block bg-[#6F5FFF] rounded-lg px-3 md:px-[3vw] lg:px-11 py-2  text-white  items-center text-xs sm:text-sm"
                  onClick={toggleLoginPopupFunction}
                >
                  Login
                </button>

                <input
                  className="peer hidden"
                  type="checkbox"
                  id="navbar-open"
                />

                {/* */}
                <div className="rounded-full box-border w-8 h-8 sm:w-10 sm:h-10 bg-[#D9D9D9]">
                  {(userData.isAuthenticated && (
                    <Image
                      src={userData.image}
                      className="rounded-full w-full h-full object-cover"
                      alt="Circle"
                    />
                  )) || (
                    <Image
                      src={userSvg}
                      className="rounded-full h-[100%] w-[100%]  object-contain"
                      alt="Circle"
                    />
                  )}
                </div>

                <label
                  className="  cursor-pointer  right-2 mt-1 text-xl sm:hidden"
                  htmlFor="navbar-open"
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
                </label>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
