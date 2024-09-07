// src/app/components/DailySteppper/AnxietySymptoms.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setAnxietySymptoms,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const AnxietySymptoms = () => {
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

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        In the past week, how often have you experienced feelings of anxiety or
        worry?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
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
