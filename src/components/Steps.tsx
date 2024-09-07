import React from "react";
import Arrow from "@/public/icons/Arrow3.svg";
import Image from "next/image";
const Steps = () => {
  return (
    <>
      <div className="cl">
        <div className="worker px-[10vw] sm:px-[14vw] my-4">
          <h2 className="texter items-center text-[4vh] md:text-[6vh] font-semibold mb-[2vh] md:mb-[8vh] sm:my-6">
            How it works?
          </h2>

          <div className="relative grid grid-cols-12 gap-x-3 md:gap-x-5 items-center mb-[4vh] sm:mb-[6vh] lg:mb-[8vh] xl:mb-[10vh]">
            <div className="col-span-6 md:col-span-4 2xl:col-span-3 flex justify-center">
              <div className="w-full p-5 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] text-4xl md:text-6xl bg-white flex justify-center items-center rounded-[1vw] shadow-md">
                1.
              </div>
            </div>
            <div className="col-span-6 md:col-span-8 2xl:col-span-9 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] flex flex-col bg-blue-100 rounded-[1vw] shadow-md pl-[2vw] md:pl-[4vw] py-2 sm:py-4 md:py-6 lg:py-8">
              <h5 className="w-full text-[3vw] md:text-xl lg:text-2xl font-semibold bg-opacity-30">
                Sign in
              </h5>
              <div className="border-t-2 w-[28vw] lg:w-[35vw] border-gray-300 mt-[1vh] sm:mt-[2vh]"></div>
              <p className="pt-[1vh] sm:py-[1vh] lg:py-[1vh] w-[30vw] md:w-[35vw] pr-2 text-[0.6rem] sm:text-[0.80rem] lg:text-[1rem] xl:text-xl">
                Sign in with Google account so that we can keep your data synced
                up across the devices.
              </p>
              <p className="text-[0.6rem] sm:text-[0.80rem] lg:text-[1rem] mt-[1vh] lg:mt-[2vh]">
                Or, you can continue as a{" "}
                <span className="font-semibold underline">Guest.</span>
              </p>
            </div>
          </div>

          {/* Updated styles for the commented sections */}

          <div className="relative grid grid-cols-12 gap-x-5 items-center mb-[4vh] sm:mb-[6vh] lg:mb-[8vh] xl:mb-[10vh]">
            <div className="col-span-6 md:col-span-4 2xl:col-span-3 flex justify-center">
              <div className="w-full p-5 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] text-4xl md:text-6xl bg-white flex justify-center items-center rounded-[1vw] shadow-md">
                2.
              </div>
            </div>
            <div className="col-span-6 md:col-span-8 2xl:col-span-9 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] flex flex-col bg-blue-100 rounded-[1vw] shadow-md pl-[2vw] md:pl-[4vw] py-2 sm:py-4 md:py-6 lg:py-8">
              <h5 className="w-full text-[3vw] md:text-xl lg:text-2xl font-semibold bg-opacity-30">
                Set your Goal
              </h5>
              <div className="border-t-2 w-[28vw] lg:w-[35vw] border-gray-300 mt-[1vh] sm:mt-[2vh]"></div>
              <p className="pt-[1vh] sm:py-[1vh] lg:py-[1vh] w-[30vw] md:w-[35vw] pr-2 text-[0.6rem] sm:text-[0.80rem] lg:text-[1rem] xl:text-xl">
                Set your goal that you want to achieve and we will show you your
                progress and evaluate the patterns in your habits.
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-12 gap-x-5 items-center mb-[4vh] sm:mb-[6vh] lg:mb-[8vh] xl:mb-[10vh]">
            <div className="col-span-6 md:col-span-4 2xl:col-span-3 flex justify-center">
              <div className="w-full p-5 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] text-4xl md:text-6xl bg-white flex justify-center items-center rounded-[1vw] shadow-md">
                3.
              </div>
            </div>
            <div className="col-span-6 md:col-span-8 2xl:col-span-9 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] flex flex-col bg-blue-100 rounded-[1vw] shadow-md pl-[2vw] md:pl-[4vw] py-2 sm:py-4 md:py-6 lg:py-8">
              <h5 className="w-full text-[3vw] md:text-xl lg:text-2xl font-semibold bg-opacity-30">
                Show up regularly
              </h5>
              <div className="border-t-2 w-[28vw] lg:w-[35vw] border-gray-300 mt-[1vh] sm:mt-[2vh]"></div>
              <p className="pt-[1vh] sm:py-[1vh] lg:py-[1vh] w-[30vw] md:w-[35vw] pr-2 text-[0.6rem] sm:text-[0.80rem] lg:text-[1rem] xl:text-xl">
                You’ll need to show up regularly to feed data to our AI model.
                The more information you give, the more helpful insight you’ll
                get.
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-12 gap-x-5 items-center mb-[4vh] sm:mb-[6vh] lg:mb-[8vh] xl:mb-[10vh]">
            <div className="col-span-6 md:col-span-4 2xl:col-span-3 flex justify-center">
              <div className="w-full p-5 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] text-4xl md:text-6xl bg-white flex justify-center items-center rounded-[1vw] shadow-md">
                4.
              </div>
            </div>
            <div className="col-span-6 md:col-span-8 2xl:col-span-9 h-[24vh] sm:h-[26vh] lg:h-[30vh] 2xl:h-[28vh] flex flex-col bg-blue-100 rounded-[1vw] shadow-md pl-[2vw] md:pl-[4vw] py-2 sm:py-4 md:py-6 lg:py-8">
              <h5 className="w-full text-[3vw] md:text-xl lg:text-2xl font-semibold bg-opacity-30">
                That’s it
              </h5>
              <div className="border-t-2 w-[28vw] lg:w-[35vw] border-gray-300 mt-[1vh] sm:mt-[2vh]"></div>
              <p className="pt-[1vh] sm:py-[1vh] lg:py-[1vh] w-[30vw] md:w-[35vw] pr-2 text-[0.6rem] sm:text-[0.80rem] lg:text-[1rem] xl:text-xl">
                Our specially tuned Artificial Intelligence model will help you
                achieve your goal.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 w-full border-gray-300"></div>

        <div className="flex flex-col items-center space-y-8 mt-[4vh] lg:mt-[6vh] mb-[25vh] sm:mb-[50vh]">
          <p className="text-gray-800 text-center text-sm sm:text-base md:text-lg lg:text-xl">
            You’re ready? Let’s get you going.
          </p>
          <button className="bg-indigo-500 text-white font-semibold py-4 text-center w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[16vw] rounded-xl flex items-center justify-center space-x-2 shadow-md hover:bg-indigo-600">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              Signup / Guest
            </span>
            <Image
              src={Arrow}
              className="w-[4vw] sm:w-[3vw] md:w-[2vw] lg:w-[1vw] h-auto object-contain"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Steps;
