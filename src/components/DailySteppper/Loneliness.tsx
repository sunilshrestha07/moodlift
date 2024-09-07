// src/app/components/DailySteppper/Loneliness.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setLoneliness,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const Loneliness = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedLoneliness = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.loneliness
  );

  const handleLonelinessSelect = (loneliness: string) => {
    // console.log("Setting loneliness to:", loneliness);
    dispatch(setLoneliness(loneliness));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How often have you felt lonely or isolated in the past week?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
          (loneliness) => (
            <button
              key={loneliness}
              className={`${buttonStyles}`}
              onClick={() => handleLonelinessSelect(loneliness)}
              style={{
                backgroundColor:
                  selectedLoneliness === loneliness ? "#dbeafe" : "white",
              }}
            >
              {loneliness}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Loneliness;
