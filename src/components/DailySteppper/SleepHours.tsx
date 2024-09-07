"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSleepHours,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SleepHours = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSleepHours = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.sleepHours
  );

  const handleSleepHoursSelect = (hours: number) => {
    dispatch(setSleepHours(hours));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        On a scale of 1 to 10, how many hours of sleep do you typically get each
        night?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleSleepHoursSelect(value)}
            style={{
              backgroundColor:
                selectedSleepHours === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SleepHours;
