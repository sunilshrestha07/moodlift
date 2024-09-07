// src/app/components/DailySteppper/StressLevel.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setStressLevel,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice"; // Update import based on your slice

const StressLevel = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected stress level from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedStressLevel = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.stressLevel
  );

  // Handle stress level selection and move to the next step
  const handleStressLevelSelect = (level: number) => {
    console.log("Setting stress level to:", level);
    dispatch(setStressLevel(level));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  // Button styles
  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        On a scale of 1 to 10, how stressed have you felt in the past week?
      </label>
      <div className="grid grid-cols-5 gap-4 mb-4 sm:pr-8">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
          <button
            key={level}
            className={`${buttonStyles}`}
            onClick={() => handleStressLevelSelect(level)}
            style={{
              backgroundColor:
                selectedStressLevel === level ? "#dbeafe" : "white",
            }} // Inline style for debugging
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StressLevel;
