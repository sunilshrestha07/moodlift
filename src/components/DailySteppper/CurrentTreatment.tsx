"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";

import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";
import { getAllQuestionsData } from "../aggregateQuestionsData";
// import { DailyQuestionsState } from "../../../redux/features/dailyQuestionsSlice";
import {
  setCurrentStep,
  setCurrentTreatment,
  DailyQuestionsState,
} from "../../../redux/features/dailyQuestionsSlice";

const CurrentTreatment: React.FC = () => {
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

  useEffect(() => {
    if (currentStep === 13) {
      console.log("Final step reached");
    }
  }, [currentStep]);
  const handleCurrentTreatmentSelect = (treatment: string) => {
    dispatch(setCurrentTreatment(treatment));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        Are you currently receiving any treatment or support for your mental
        health (e.g., therapy, medication)?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {[
          "Yes, and it's helpful",
          "Yes, but it's not helpful",
          "No, but I'm considering it",
          "No, and I'm not considering it",
        ].map((treatment) => (
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
