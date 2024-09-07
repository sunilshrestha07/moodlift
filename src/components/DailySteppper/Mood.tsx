"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setMood,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice"; // Update import based on your slice
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const Mood = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected mood from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedMood = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.mood
  );

  // Handle mood selection and move to the next step
  const handleMoodSelect = (mood: number) => {
    dispatch(setMood(mood));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        On a scale of 1 to 10, how would you rate your overall mood over the
        past week?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleMoodSelect(value)}
            style={{
              backgroundColor: selectedMood === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mood;
