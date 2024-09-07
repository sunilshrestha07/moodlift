// src/app/components/DailySteppper/SleepHours.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { setSleepHours, setCurrentStep } from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const SleepHours = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentStep = useSelector((state: RootState) => state.dailyQuestionsSlice.currentStep);
    const selectedSleepHours = useSelector(
        (state: RootState) => state.dailyQuestionsSlice.sleepHours
    );

    const handleSleepHoursSelect = (hours: string) => {
        console.log("Setting sleep hours to:", hours);
        dispatch(setSleepHours(hours));
        dispatch(setCurrentStep(currentStep + 1));
    };

    return (
        <div>
            <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
                How many hours of sleep do you typically get each night?
            </label>
            <div className={smallButtonsPaddingStyles}>
                {[
                    "Less than 4 hours",
                    "4-6 hours",
                    "6-8 hours",
                    "8-10 hours",
                    "More than 10 hours",
                ].map((hours) => (
                    <button
                        key={hours}
                        className={`${buttonStyles}`}
                        onClick={() => handleSleepHoursSelect(hours)}
                        style={{
                            backgroundColor: selectedSleepHours === hours ? "#dbeafe" : "white",
                        }}
                    >
                        {hours}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SleepHours;
