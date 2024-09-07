// src/app/components/DailySteppper/EatingHabits.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setEatingHabits,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const EatingHabits = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedEatingHabits = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.eatingHabits
  );

  const handleEatingHabitsSelect = (habits: string) => {
    console.log("Setting eating habits to:", habits);
    dispatch(setEatingHabits(habits));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How would you describe your eating habits in the past week?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {[
          "Very unhealthy",
          "Unhealthy",
          "Balanced",
          "Healthy",
          "Very healthy",
        ].map((habits) => (
          <button
            key={habits}
            className={`${buttonStyles}`}
            onClick={() => handleEatingHabitsSelect(habits)}
            style={{
              backgroundColor:
                selectedEatingHabits === habits ? "#dbeafe" : "white",
            }}
          >
            {habits}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EatingHabits;
