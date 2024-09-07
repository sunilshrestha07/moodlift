"use client";
import React, { useState, useEffect, useRef } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface StepperProps {
  steps: string[];
  currentStep: number;
  handleClick: (direction: string) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  handleClick,
}) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);

  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];
    for (let count = 0; count < newSteps.length; count++) {
      // Iterate over all steps
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: count < stepNumber, // Previous steps should be marked as completed
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true, // Mark previous steps as completed
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false, // Future steps are not completed
        };
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // Initialize the steps
    const stepsState: Step[] = steps.map((step, index) => ({
      description: step,
      completed: index === 0,
      highlighted: index === 0, // Only the first step is highlighted
      selected: index === 0, // Only the first step is selected
    }));

    stepRef.current = stepsState;

    // Set initial state based on the current step
    setNewStep(updateStep(currentStep, stepRef.current)); // Use currentStep directly
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div key={index} className="flex items-center">
      <div
        className={`flex items-center justify-center rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 ${
          step.completed
            ? "bg-[#6F5FFF] text-white border-[#6F5FFF]"
            : "bg-white border-gray-300"
        }`}
      >
        {index + 1}
      </div>
      {index !== newStep.length - 1 && (
        <div
          className={`flex-auto w-full border-t-4 transition duration-500 ease-in-out ${
            step.completed ? "border-[#6F5FFF]" : "border-gray-200"
          }`}
        ></div>
      )}
    </div>
  ));

  return (
    <div>
      <div className="relative flex justify-center mx-1 items-center text-black mb-6">
        {displaySteps}
      </div>
    </div>
  );
};

export default Stepper;
