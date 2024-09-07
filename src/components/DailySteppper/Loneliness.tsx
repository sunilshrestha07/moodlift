// src/app/components/DailySteppper/Loneliness.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setLoneliness,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const Loneliness = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedLoneliness = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.loneliness
  );

  const handleLonelinessSelect = (loneliness: string) => {
    console.log("Setting loneliness to:", loneliness);
    dispatch(setLoneliness(loneliness));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How often have you felt lonely or isolated in the past week?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
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
