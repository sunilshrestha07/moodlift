// src/app/components/DailySteppper/Loneliness.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";
import {
  DailyQuestionsState,
  setMessageForBruno,
} from "../../../redux/features/dailyQuestionsSlice";
import Image from "next/image";
import frontAvatar from "@/public/avatar/avatarFrontHappy.svg";
import { getAllQuestionsData } from "./aggregateQuestionsData";

const MessageForBruno = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState("");
  const [qsnDone, setQsnDone] = useState(false);

  const isDone = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.isDoneAsking
  );

  const userData = useSelector((state: RootState) => state.userSlice);
  console.log(userData);

  const sendDailyQsn = async (dailyQuestionsState: DailyQuestionsState) => {
    //   const res = await fetch(`/api/user/${userData}/saveActivity`, {
    //       method: "POST",
    //       headers: {
    //           "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(),
    //   });
    console.log({ toSEndToBackend: dailyQuestionsState });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const dailyQuestionsState = useSelector(
    (state: RootState) => state.dailyQuestionsSlice
  ) as DailyQuestionsState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setMessageForBruno(message));

    setMessage(""); // Clear the input after submission
    setQsnDone(!qsnDone);
  };

  useEffect(() => {
    const data = getAllQuestionsData(dailyQuestionsState);
    sendDailyQsn(dailyQuestionsState);
    console.log({ data: dailyQuestionsState });
  }, [qsnDone]);
  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        <div className="flex items-center">
          <div>Do You have any message for Bruno?</div>
          <div>
            <Image src={frontAvatar} alt="frontAvatar" className="h-6 w-6" />
          </div>
        </div>
      </label>
      <div className={`${smallButtonsPaddingStyles}`}>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
          <input
            type="text"
            onChange={handleChange}
            className={`items-start border-[0.8em] rounded-md border-[#D9D9D9] bg-[#D9D9D9] w-[30vw] h-[5rem] focus:outline-none ${
              window.innerWidth >= 1024
                ? "placeholder-opacity-100"
                : "placeholder-opacity-0"
            }`}
            placeholder={
              window.innerWidth >= 1024
                ? "(Message) Let Bruno understand you"
                : ""
            }
          />

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForBruno;
