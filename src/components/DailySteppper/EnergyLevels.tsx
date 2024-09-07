"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setEnergyLevels,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const EnergyLevels = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedEnergyLevels = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.energyLevels
  );

  const handleEnergyLevelsSelect = (level: number) => {
    dispatch(setEnergyLevels(level));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        On a scale of 1 to 10, how would you rate your energy levels throughout
        the day? (1 being very low and 10 being very high)
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleEnergyLevelsSelect(value)}
            style={{
              backgroundColor:
                selectedEnergyLevels === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnergyLevels;
