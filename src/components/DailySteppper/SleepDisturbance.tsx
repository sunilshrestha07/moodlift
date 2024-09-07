// src/app/components/DailySteppper/SleepDisturbance.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSleepDisturbance,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const SleepDisturbance = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSleepDisturbance = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.sleepDisturbance
  );

  const handleSleepDisturbanceSelect = (disturbance: string) => {
    console.log("Setting sleep disturbance to:", disturbance);
    dispatch(setSleepDisturbance(disturbance));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How often have you experienced disturbances during sleep (e.g., waking
        up frequently, trouble falling asleep)?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {["Never", "Rarely", "Occasionally", "Frequently", "Every night"].map(
          (disturbance) => (
            <button
              key={disturbance}
              className={`${buttonStyles}`}
              onClick={() => handleSleepDisturbanceSelect(disturbance)}
              style={{
                backgroundColor:
                  selectedSleepDisturbance === disturbance
                    ? "#dbeafe"
                    : "white",
              }}
            >
              {disturbance}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SleepDisturbance;
