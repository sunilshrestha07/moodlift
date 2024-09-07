// src/app/components/DailySteppper/MoodDuration.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setMoodDuration,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice"; // Update import based on your slice
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const MoodDuration: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected mood duration from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedMoodDuration = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.moodDuration
  );

  // Handle mood duration selection and move to the next step
  const handleMoodDurationSelect = (duration: string) => {
    console.log("Setting mood duration to:", duration);
    dispatch(setMoodDuration(duration));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  // Button styles

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How long have you been feeling your current mood (e.g., positive or
        negative)?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {[
          "A few hours",
          "A day or two",
          "Several days",
          "Over a week",
          "More than two weeks",
        ].map((duration) => (
          <button
            key={duration}
            className={`${buttonStyles}`}
            onClick={() => handleMoodDurationSelect(duration)}
            style={{
              backgroundColor:
                selectedMoodDuration === duration ? "#dbeafe" : "white",
            }} // Inline style for debugging
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodDuration;
