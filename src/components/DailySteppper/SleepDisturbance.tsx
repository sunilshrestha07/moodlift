// src/app/components/DailySteppper/SleepDisturbance.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSleepDisturbance,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SleepDisturbance = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSleepDisturbance = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.sleepDisturbance
  );

  const handleSleepDisturbanceSelect = (disturbance: string) => {
    // console.log("Setting sleep disturbance to:", disturbance);
    dispatch(setSleepDisturbance(disturbance));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How often have you experienced disturbances during sleep (e.g., waking
        up frequently, trouble falling asleep)?
      </label>
      <div className={smallButtonsPaddingStyles}>
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
