"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSleepQuality,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SleepQuality = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSleepQuality = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.sleepQuality
  );

  const handleSleepQualitySelect = (quality: number) => {
    dispatch(setSleepQuality(quality));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg sm:font-medium mb-2">
        How would you rate the quality of your sleep over the past week? (1
        being very poor and 10 being very good)
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleSleepQualitySelect(value)}
            style={{
              backgroundColor:
                selectedSleepQuality === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SleepQuality;
