// src/app/components/DailySteppper/AnxietySymptoms.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setAnxietySymptoms,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const AnxietySymptoms: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedAnxietySymptoms = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.anxietySymptoms
  );

  const handleAnxietySymptomsSelect = (symptoms: string) => {
    console.log("Setting anxiety symptoms to:", symptoms);
    dispatch(setAnxietySymptoms(symptoms));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        In the past week, how often have you experienced feelings of anxiety or
        worry?
      </label>
      <div className={smallButtonsPaddingStyles}>
        {[
          "Not at all",
          "Occasionally",
          "Sometimes",
          "Often",
          "All the time",
        ].map((symptoms) => (
          <button
            key={symptoms}
            className={`${buttonStyles}`}
            onClick={() => handleAnxietySymptomsSelect(symptoms)}
            style={{
              backgroundColor:
                selectedAnxietySymptoms === symptoms ? "#dbeafe" : "white",
            }}
          >
            {symptoms}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnxietySymptoms;
