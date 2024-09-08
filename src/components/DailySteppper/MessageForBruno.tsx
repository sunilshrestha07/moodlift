import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { smallButtonsPaddingStyles } from "./StressLevel";
import {
  DailyQuestionsState,
  setMessageForBruno,
  setIsDoneAsking,
} from "../../../redux/features/dailyQuestionsSlice";
import Image from "next/image";
import frontAvatar from "@/public/avatar/avatarFrontHappy.svg";

const MessageForBruno = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState("");
  const userId = useSelector((state: RootState) => state.userSlice._id);
  const dailyQuestionsState = useSelector(
    (state: RootState) => state.dailyQuestionsSlice
  ) as DailyQuestionsState;

  const sendDailyQsn = async (dailyQuestionsState: DailyQuestionsState) => {
    try {
      const res = await fetch(`/api/user/${userId}/saveActivity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activity: dailyQuestionsState }),
      });

      if (!res.ok) {
        throw new Error("Failed to save activity");
      }

      const data = await res.json();
      console.log("Activity saved successfully:", data);
    } catch (error) {
      console.error("Error saving activity:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setMessageForBruno(message));

    // Update the dailyQuestionsState with the new message
    const updatedState = {
      ...dailyQuestionsState,
      messageForBruno: message,
    };

    // Send the updated state to the API
    await sendDailyQsn(updatedState);

    // Clear the input and mark questions as done
    setMessage("");
    dispatch(setIsDoneAsking(true));
  };

  return (
    <div>
      <label
        htmlFor="messageForBruno"
        className="block text-xs sm:text-sm lg:text-lg font-medium mb-2"
      >
        <div className="flex items-center">
          <div>Do you have any message for Bruno?</div>
          <div>
            <Image src={frontAvatar} alt="frontAvatar" className="h-6 w-6" />
          </div>
        </div>
      </label>
      <div className={`${smallButtonsPaddingStyles}`}>
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <input
            id="messageForBruno"
            type="text"
            value={message}
            onChange={handleChange}
            className="items-start border-[0.8em] rounded-md border-[#D9D9D9] bg-[#D9D9D9] w-[80vw] sm:w-[85vw] xl:w-[70vw] 2xl:w-[75vw] h-[3rem] sm:h-[5rem] focus:outline-none p-2 placeholder:text-xs sm:placeholder:text-lg"
            aria-label="Message for Bruno"
            placeholder="(Message) Let Bruno understand you"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 py-2 px-4  mt-2 rounded  transition duration-300 "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForBruno;
