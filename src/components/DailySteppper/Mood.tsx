// src/app/components/DailySteppper/Mood.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setMood,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice"; // Update import based on your slice

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
  const handleMoodSelect = (mood: string) => {
    console.log("Setting mood to:", mood);
    dispatch(setMood(mood));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  // Button styles
  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How would you describe your overall mood over the past week?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {[
          "Very positive",
          "Positive",
          "Neutral",
          "Negative",
          "Very negative",
        ].map((mood) => (
          <button
            key={mood}
            className={`${buttonStyles}`}
            onClick={() => handleMoodSelect(mood)}
            style={{
              backgroundColor: selectedMood === mood ? "#dbeafe" : "white",
            }} // Inline style for debugging
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mood;
