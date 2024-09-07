"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setTraumaticEvents,
  setCurrentStep,
} from "../../../redux/features/initialQsnSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./Gender"; // Import styles from Gender component

const Traumatic = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get current step and selected traumatic event from Redux state
  const currentStep = useSelector(
    (state: RootState) => state.initialQsnSlice.currentStep
  );
  const selectedTraumaticEvent = useSelector(
    (state: RootState) => state.initialQsnSlice.traumaticEvents
  );

  // Handle traumatic event selection and move to the next step
  const handleTraumaticSelect = (value: string) => {
    dispatch(setTraumaticEvents(value));
    dispatch(setCurrentStep(currentStep + 1)); // Move to next step
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        Have you experienced any traumatic events that continue to affect your
        mental health?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {["YES", "NO"].map((option) => (
          <button
            key={option}
            className={`${buttonStyles} ${
              selectedTraumaticEvent === option ? "bg-blue-100" : "bg-white"
            }`}
            onClick={() => handleTraumaticSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Traumatic;
