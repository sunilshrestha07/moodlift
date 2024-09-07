// src/app/components/DailySteppper/PhysicalActivity.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setPhysicalActivity,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const PhysicalActivity = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedPhysicalActivity = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.physicalActivity
  );

  const handlePhysicalActivitySelect = (activity: string) => {
    console.log("Setting physical activity to:", activity);
    dispatch(setPhysicalActivity(activity));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How frequently have you engaged in physical activity or exercise in the
        past week?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {["Never", "1-2 times", "3-4 times", "5-6 times", "Daily"].map(
          (activity) => (
            <button
              key={activity}
              className={`${buttonStyles}`}
              onClick={() => handlePhysicalActivitySelect(activity)}
              style={{
                backgroundColor:
                  selectedPhysicalActivity === activity ? "#dbeafe" : "white",
              }}
            >
              {activity}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PhysicalActivity;
