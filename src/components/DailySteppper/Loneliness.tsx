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

  const handleLonelinessSelect = (loneliness: number) => {
    dispatch(setLoneliness(loneliness));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg sm:font-medium mb-2">
        On a scale of 1 to 10, how often have you felt lonely or isolated in the
        past week? (1 being never and 10 being always)
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleLonelinessSelect(value)}
            style={{
              backgroundColor:
                selectedLoneliness === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Loneliness;
