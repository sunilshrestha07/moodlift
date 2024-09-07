// src/app/components/DailySteppper/EnergyLevels.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setEnergyLevels,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const EnergyLevels = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedEnergyLevels = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.energyLevels
  );

  const handleEnergyLevelsSelect = (level: string) => {
    console.log("Setting energy levels to:", level);
    dispatch(setEnergyLevels(level));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How would you rate your energy levels throughout the day?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {["Very low", "Low", "Moderate", "High", "Very high"].map((level) => (
          <button
            key={level}
            className={`${buttonStyles}`}
            onClick={() => handleEnergyLevelsSelect(level)}
            style={{
              backgroundColor:
                selectedEnergyLevels === level ? "#dbeafe" : "white",
            }}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnergyLevels;
