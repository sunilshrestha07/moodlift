// src/app/components/DailySteppper/CurrentTreatment.tsx
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { setCurrentTreatment, setCurrentStep } from "../../../redux/features/dailyQuestionsSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./StressLevel";

const CurrentTreatment = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentStep = useSelector((state: RootState) => state.dailyQuestionsSlice.currentStep);
    const selectedCurrentTreatment = useSelector(
        (state: RootState) => state.dailyQuestionsSlice.currentTreatment
    );

    const handleCurrentTreatmentSelect = (treatment: string) => {
        console.log("Setting current treatment to:", treatment);
        dispatch(setCurrentTreatment(treatment));
        dispatch(setCurrentStep(currentStep + 1));
    };

    return (
        <div>
            <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
                Are you currently receiving any treatment or support for your mental health (e.g.,
                therapy, medication)?
            </label>
            <div className={smallButtonsPaddingStyles}>
                {[
                    "Yes, and it’s helpful",
                    "Yes, but it’s not helpful",
                    "No, but I’m considering it",
                    "No, and I’m not considering it",
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
