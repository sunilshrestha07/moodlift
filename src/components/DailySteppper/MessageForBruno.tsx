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

    const isDone = useSelector((state: RootState) => state.dailyQuestionsSlice.isDoneAsking);

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
            <div className={`${smallButtonsPaddingStyles} `}>
                <form onSubmit={handleSubmit} className="">
                    <input
                        type="text"
                        onChange={handleChange}
                        className="border-2 rounded-md border-black/30 w-[50vw] h-[5rem]"
                    />
                    <button className="bg-slate-400 p-4">Done</button>
                </form>
            </div>
        </div>
    );
};

export default MessageForBruno;
