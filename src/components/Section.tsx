import React from "react";
import { sectionPadding } from "@/app/globalStyles";
import Avatar from "@/public/imagesforlandingpage/Avatar.svg";
import Record from "@/public/imagesforlandingpage/Record.svg";
import Progress from "@/public/imagesforlandingpage/Progress.svg";
import GetStarted from "@/public/imagesforlandingpage/GetStarted.svg";
import Community from "@/public/imagesforlandingpage/Community.svg";
import Mindfullness from "@/public/imagesforlandingpage/Mindfullness.svg";

import Image from "next/image";
const Section = () => {
    const padding = `px-10vw`;
    return (
        <>
            <section className={`${sectionPadding}  py-[22px] w-full  h-full`}>
                <div className="grid grid-10-90  gap-y-4 sm:gap-y-7">
                    <div className="row-span-1 grid lg:grid-cols-2 gap-x-16 gap-y-8  lg:gap-y-0 ">
                        <div className="sidebar  order-1  lg:order-2 sm:col-span-1 bg-[#6F5FFF] rounded-3xl sm:rounded-[54px]  flex flex-col p-[8%] 2xl:p-[10%]   ">
                            {/*sm:pl-20 sm:pr-28 sm:pt-20*/}
                            <h1 className=" md:font-medium capitalize sm:text-[24px] xl:text-[2vw] lg:text-[20px]  text-white leading-[1.4]  sm:leading-loose pt-[1vh]   ">
                                TAKE CONTROL
                                <br className="" />
                                <span className=" "> OF YOUR </span> <br />
                                <span className="text-[#FFACA0]">MENTAL WELL BEING </span>
                            </h1>
                            <div className="text-white mt-8 2xl:mt-12 font-normal text-xs xl:text-xl leading-[1.5]  sm:leading-loose ">
                                Get personal help from our AI,
                                <br />
                                <span> specially turned in for you.</span>
                            </div>
                            <div className="mt-[4vh] sm:mt-[6vh] lg:mt-[10vh] 2xl:mt-[8vh]  w-[16vw] ">
                                {/* lg:mt-[18vh] */}
                                <button>
                                    <Image
                                        src={GetStarted}
                                        className="max-w-full h-auto object-contain"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>

                        {/* <div className="imager  sm:order-1 order-2 sm:col-span-1 w-full  gap-y-[5vh] lg:gap-y-[5vh] grid row-span-2 ml-6vh  mt-28 "> */}
                        <div className="grid grid-cols-1 sm:order-1 order-2  ">
                            {/* <div className="grid w-full row-span-1  gap-y-4 sm:grid-cols-2 gap-x-4 lg:gap-40 xl:gap-x-24 2xl:gap-x-16 "> */}
                            <div className="grid grid-rows-2  lg:gap-y-2  ">
                                <div className="row-span-1 imager    lg:w-full">
                                    <div className="grid  grid-cols-2 gap-x-4  pt-[0vh] lg:pt-[8vh] ">
                                        <div className="col-span-1  w-full  h-full  ">
                                            <Image
                                                src={Avatar}
                                                className=" h-full  w-full object-contain"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-1  w-full  h-full">
                                            <Image
                                                src={Record}
                                                className=" h-full w-full object-contain"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 lg:pt-4 h-full">
                                    <div className="progress sm:col-span-2 w-full  object-contain">
                                        <Image
                                            src={Progress}
                                            className="w-full  h-auto object-contain"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row-span-1 w-full h-full">
                        <div className="Community grid grid-cols-3 ">
                            <div className="col-span-2 h-full">
                                <Image
                                    src={Community}
                                    className="w-full h-full object-contain"
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 pl-[20%] mt-[5%] h-[90%]">
                                <Image
                                    src={Mindfullness}
                                    className="w-full  h-full object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section;
