// src/app/components/DailyStepper/DailyStepper.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import Stepper from "./Stepper";
import Mood from "./DailySteppper/Mood";
import MoodDuration from "./DailySteppper/MoodDuration";
import StressLevel from "./DailySteppper/StressLevel";
import SleepQuality from "./DailySteppper/SleepQuality";
import SleepHours from "./DailySteppper/SleepHours";
import AnxietySymptoms from "./DailySteppper/AnxietySymptoms";
import SleepDisturbance from "./DailySteppper/SleepDisturbance";
import PhysicalActivity from "./DailySteppper/PhysicalActivity";
import EnergyLevels from "./DailySteppper/EnergyLevels";
import EatingHabits from "./DailySteppper/EatingHabits";
import SocialEngagement from "./DailySteppper/SocialEngagement";
import Loneliness from "./DailySteppper/Loneliness";
import CurrentTreatment from "./DailySteppper/CurrentTreatment";
import { setCurrentStep } from "../../redux/features/dailyQuestionsSlice"; // Update import based on your slice
import MessageForBruno from "./DailySteppper/MessageForBruno";

const DailyStepper = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentStep = useSelector((state: RootState) => state.dailyQuestionsSlice.currentStep); // Access state from the dailyQuestionsSlice
    const [isClient, setIsClient] = useState(false);

    const steps: string[] = [
        "Mood",
        "Mood Duration",
        "Stress Level",
        "Sleep Quality",
        "Sleep Hours",
        "Anxiety Symptoms",
        "Sleep Disturbance",
        "Physical Activity",
        "Energy Levels",
        "Eating Habits",
        "Social Engagement",
        "Loneliness",
        "Current Treatment",
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const displaySteps = (step: number): React.ReactNode => {
        if (!isClient) return null;
        switch (step) {
            case 0:
                return <Mood />;
            case 1:
                return <MoodDuration />;
            case 2:
                return <StressLevel />;
            case 3:
                return <SleepQuality />;
            case 4:
                return <SleepHours />;
            case 5:
                return <SleepDisturbance />;
            case 6:
                return <AnxietySymptoms />;
            case 7:
                return <PhysicalActivity />;
            case 8:
                return <EnergyLevels />;
            case 9:
                return <EatingHabits />;
            case 10:
                return <SocialEngagement />;
            case 11:
                return <Loneliness />;
            case 12:
                return <CurrentTreatment />;
            case 13:
                return <MessageForBruno />;
            default:
                return null;
        }
    };
    const handleClick = (direction: string) => {
        let newStep = currentStep;
        if (direction === "prev") {
            newStep = Math.max(currentStep - 1, 0);
        }

        dispatch(setCurrentStep(newStep));
    };

    // Remove the handleClick function and button for navigation

    return (
        <>
            <div className="flex ">
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-xl font-semibold mb-4">
                        Please complete this daily questionnaire
                    </h2>
                    <button
                        onClick={() => handleClick("prev")}
                        className={`bg-[#D9D9D9] hover:bg-gray-400 text-gray-800 font-semibold py-2 px-3 text-xs md:text-sm rounded mb-6 ${
                            currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Previous
                    </button>
                    <div>
                        <Stepper steps={steps} currentStep={currentStep} handleClick={() => {}} />
                    </div>
                    <div>{displaySteps(currentStep)}</div>
                </div>
            </div>
        </>
    );
};

export default DailyStepper;
