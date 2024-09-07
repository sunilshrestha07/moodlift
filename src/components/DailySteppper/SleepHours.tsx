// src/app/components/DailySteppper/SleepHours.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSleepHours,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const SleepHours = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSleepHours = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.sleepHours
  );

  const handleSleepHoursSelect = (hours: string) => {
    console.log("Setting sleep hours to:", hours);
    dispatch(setSleepHours(hours));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How many hours of sleep do you typically get each night?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {[
          "Less than 4 hours",
          "4-6 hours",
          "6-8 hours",
          "8-10 hours",
          "More than 10 hours",
        ].map((hours) => (
          <button
            key={hours}
            className={`${buttonStyles}`}
            onClick={() => handleSleepHoursSelect(hours)}
            style={{
              backgroundColor:
                selectedSleepHours === hours ? "#dbeafe" : "white",
            }}
          >
            {hours}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SleepHours;
