// src/app/components/DailySteppper/PhysicalActivity.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setPhysicalActivity,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const PhysicalActivity = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedPhysicalActivity = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.physicalActivity
  );

  const handlePhysicalActivitySelect = (activity: string) => {
    // console.log("Setting physical activity to:", activity);
    dispatch(setPhysicalActivity(activity));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How frequently have you engaged in physical activity or exercise in the
        past week?
      </label>
      <div className={smallButtonsPaddingStyles}>
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
