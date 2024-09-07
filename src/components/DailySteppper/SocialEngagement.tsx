// src/app/components/DailySteppper/SocialEngagement.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setSocialEngagement,
  setCurrentStep,
} from "../../../redux/features/dailyQuestionsSlice";

const SocialEngagement = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentStep = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.currentStep
  );
  const selectedSocialEngagement = useSelector(
    (state: RootState) => state.dailyQuestionsSlice.socialEngagement
  );

  const handleSocialEngagementSelect = (engagement: string) => {
    console.log("Setting social engagement to:", engagement);
    dispatch(setSocialEngagement(engagement));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        How often have you interacted with friends, family, or social groups in
        the past week?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:pr-8">
        {[
          "Not at all",
          "Once or twice",
          "Several times",
          "Daily",
          "Multiple times per day",
        ].map((engagement) => (
          <button
            key={engagement}
            className={`${buttonStyles}`}
            onClick={() => handleSocialEngagementSelect(engagement)}
            style={{
              backgroundColor:
                selectedSocialEngagement === engagement ? "#dbeafe" : "white",
            }}
          >
            {engagement}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialEngagement;
