// src/app/components/DailySteppper/SleepQuality.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { setSleepQuality, setCurrentStep } from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SleepQuality = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentStep = useSelector((state: RootState) => state.dailyQuestionsSlice.currentStep);
    const selectedSleepQuality = useSelector(
        (state: RootState) => state.dailyQuestionsSlice.sleepQuality
    );

    const handleSleepQualitySelect = (quality: string) => {
        console.log("Setting sleep quality to:", quality);
        dispatch(setSleepQuality(quality));
        dispatch(setCurrentStep(currentStep + 1));
    };

    return (
        <div>
            <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
                How would you rate the quality of your sleep over the past week?
            </label>
            <div className={smallButtonsPaddingStyles}>
                {["Very poor", "Poor", "Average", "Good", "Very good"].map((quality) => (
                    <button
                        key={quality}
                        className={`${buttonStyles}`}
                        onClick={() => handleSleepQualitySelect(quality)}
                        style={{
                            backgroundColor: selectedSleepQuality === quality ? "#dbeafe" : "white",
                        }}
                    >
                        {quality}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SleepQuality;
