"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
    setPreviousDiagnosis,
    setCurrentStep,
    toggleIsInitialQuestionVisible,
} from "../../../redux/features/initialQsnSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./Gender"; // Reuse styles from Gender component
// import Traumatic from "./Traumatic";

const options = [
    "No",
    "PTSD",
    "Depression",
    "Anxiety Disorders",
    "OCD",
    "ADHD",
    "Eating Disorders",
    "Autism Spectrum Disorder",
    "Not professionally diagnosed",
];

const Mentalhealth: React.FC = () => {
    const dispatch = useDispatch();
    const selectedOptions = useSelector(
        (state: RootState) => state.initialQsnSlice.previousDiagnoses
    );
    const currentStep = useSelector((state: RootState) => state.initialQsnSlice.currentStep);
    const age = useSelector((state: RootState) => state.initialQsnSlice.age);
    const gender = useSelector((state: RootState) => state.initialQsnSlice.gender);
    const traumaticEvents = useSelector(
        (state: RootState) => state.initialQsnSlice.traumaticEvents
    );

    const handleOptionClick = (option: string) => {
        if (selectedOptions.includes(option)) {
            // Deselect the option
            const updatedOptions = selectedOptions.filter((item) => item !== option);
            dispatch(setPreviousDiagnosis(updatedOptions));
        } else {
            // Select the option
            const updatedOptions = [...selectedOptions, option];
            dispatch(setPreviousDiagnosis(updatedOptions));
        }
    };

    type initialQsnType = {
        age: number;
        gender: string;
        traumaticEvents: string;
        mentalHealthConditions: string[];
    };

    const handleConfirm = () => {
        if (selectedOptions.length > 0) {
            // Create the object with age, gender, and mental health conditions
            const userData: initialQsnType = {
                age: age,
                gender: gender,
                traumaticEvents: traumaticEvents,
                mentalHealthConditions: selectedOptions,
            };

            // Log the object
            console.log("User Data:", userData);
            sendDailyQsn(userData);

            // Move to next step
            dispatch(setCurrentStep(currentStep + 1));
            dispatch(toggleIsInitialQuestionVisible());
        }
    };
    const userId = useSelector((state: RootState) => state.userSlice._id);

    const sendDailyQsn = async (userData: initialQsnType) => {
        try {
            const res = await fetch(`/api/user/${userId}/saveInitialQsn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ record: userData }),
            });

            if (!res.ok) {
                throw new Error("Failed to save activity");
            }

            const data = await res.json();
            console.log("Activity saved successfully:", data);
        } catch (error) {
            console.error("Error saving activity:", error);
            // Handle error (e.g., show an error message to the user)
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
                Select your mental health condition:
            </label>
            <div className={smallButtonsPaddingStyles}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`${buttonStyles} ${
                            selectedOptions.includes(option) ? "bg-blue-100" : "bg-white"
                        }`}
                        style={{
                            backgroundColor: selectedOptions.includes(option) ? "#dbeafe" : "white",
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleConfirm}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 text-xs md:text-sm rounded ${
                        selectedOptions.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={selectedOptions.length === 0}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Mentalhealth;
