"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setMoodDuration,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice"; // Update import based on your slice
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const MoodDuration = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected mood duration from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedMoodDuration = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.moodDuration
  );

  // Handle mood duration selection and move to the next step
  const handleMoodDurationSelect = (duration: number) => {
    dispatch(setMoodDuration(duration));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg sm:font-medium mb-2">
        How would you rate the duration of your current mood? (1 being the
        shortest duration and 10 being the longest)
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleMoodDurationSelect(value)}
            style={{
              backgroundColor:
                selectedMoodDuration === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodDuration;
