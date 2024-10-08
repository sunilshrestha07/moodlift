"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setCurrentTreatment,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";
import { getAllQuestionsData } from "./aggregateQuestionsData";
import { DailyQuestionsState } from "../../../redux/features/dailyQuestionsSlice";

const CurrentTreatment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedCurrentTreatment = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentTreatment
  );

  const dailyQuestionsState = useSelector(
    (state: RootState) => state.dailyQuestionsSlice
  ) as DailyQuestionsState;

  const handleCurrentTreatmentSelect = (treatment: string) => {
    dispatch(setCurrentTreatment(treatment));
    dispatch(setCurrentStep(currentStep + 1));
  };

  // useEffect(() => {
  //   if (currentStep === 12) {
  //     // Small delay to ensure state has updated before aggregating data
  //     setTimeout(() => {
  //       const allData = getAllQuestionsData(dailyQuestionsState);
  //       console.log("All questions data:", allData);
  //     }, 100);
  //   }
  // }, [currentStep, dailyQuestionsState]);

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg sm:font-medium mb-2">
        Are you currently receiving any treatment or support for your mental
        health (e.g., therapy, medication)?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {["Yes", "No"].map((treatment) => (
          <button
            key={treatment}
            className={`${buttonStyles}`}
            onClick={() => handleCurrentTreatmentSelect(treatment)}
            style={{
              backgroundColor:
                selectedCurrentTreatment === treatment ? "#dbeafe" : "white",
            }}
          >
            {treatment}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrentTreatment;
