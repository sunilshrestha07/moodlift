"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSocialEngagement,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SocialEngagement = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSocialEngagement = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.socialEngagement
  );

  const handleSocialEngagementSelect = (engagement: number) => {
    dispatch(setSocialEngagement(engagement));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg sm:font-medium mb-2">
        How would you rate your level of social engagement over the past week?
        (1 being no interaction and 10 being very frequent interaction)
      </label>
      <div className={smallButtonsPaddingStyles}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <button
            key={value}
            className={`${buttonStyles}`}
            onClick={() => handleSocialEngagementSelect(value)}
            style={{
              backgroundColor:
                selectedSocialEngagement === value ? "#dbeafe" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialEngagement;
