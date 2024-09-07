// src/app/components/Mainstep.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import Stepper from "./Stepper";
import Age from "./InitialSteppper/Age";
import Gender from "./InitialSteppper/Gender";
import Traumatic from "./InitialSteppper/Traumatic";
import Mentalhealth from "./InitialSteppper/Mentalhealth";
import { setCurrentStep } from "../../redux/features/initialQsnSlice";

const Initstep = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentStep = useSelector(
    (state: RootState) => state.initialQsnSlice.currentStep
  ); // Access state from the specific slice
  const [isClient, setIsClient] = useState(false);

  const steps: string[] = [
    "AGE",
    "GENDER",
    "Traumatic effect",
    "Mental health",
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const displaySteps = (step: number): React.ReactNode => {
    if (!isClient) return null;
    switch (step) {
      case 0:
        return <Age />;
      case 1:
        return <Gender />;
      case 2:
        return <Traumatic />;
      case 3:
        return <Mentalhealth />;
      default:
        return null;
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    if (direction === "next") {
      newStep = Math.min(currentStep + 1, steps.length - 1);
    } else if (direction === "prev") {
      newStep = Math.max(currentStep - 1, 0);
    }

    dispatch(setCurrentStep(newStep));
  };

  return (
    <>
      <div className="flex px-[10vw] sm:px-[14vw]">
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl font-semibold mb-4">
            Please fill up this form
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
            <Stepper
              steps={steps}
              currentStep={currentStep}
              handleClick={handleClick}
            />
          </div>
          <div>{displaySteps(currentStep)}</div>
        </div>
      </div>
    </>
  );
};

export default Initstep;
