"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setGender,
  setCurrentStep,
} from "../../../redux/features/initialQsnSlice";

// Exported styles from the previous code
export const buttonStyles = `shrink-0 text-xs md:text-sm 2xl:text-lg px-3 md:px-12 2xl:px-16 py-4 sm:py-6 bg-white border shadow-smallButtonShadow rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;
export const smallButtonsPaddingStyles = "flex flex-wrap gap-6 mb-4 sm:pr-8";

const Gender = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected gender from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.initialQsnSlice.currentStep
  );
  const selectedGender = useSelector(
    (state: RootState) => state.initialQsnSlice.gender
  );

  // Handle gender selection and move to the next step
  const handleGenderSelect = (gender: string) => {
    console.log("Setting gender to:", gender);
    dispatch(setGender(gender));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        What is your gender?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {["Male", "Female", "Other", "Rather not say"].map((gender) => (
          <button
            key={gender}
            className={`${buttonStyles}`}
            onClick={() => handleGenderSelect(gender)}
            style={{
              backgroundColor: selectedGender === gender ? "#dbeafe" : "white",
            }} // Inline style to indicate the selected button
          >
            {gender}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gender;
