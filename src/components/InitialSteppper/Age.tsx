"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setAge,
  setCurrentStep,
} from "../../../redux/features/initialQsnSlice";

const Age = () => {
  const dispatch = useDispatch<AppDispatch>();
  const age = useSelector((state: RootState) => state.initialQsnSlice.age);
  const currentStep = useSelector(
    (state: RootState) => state.initialQsnSlice.currentStep
  );

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      dispatch(setAge(value));
    }
  };

  const handleNext = () => {
    if (age) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  return (
    <div>
      <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
        What is your age?
      </label>
      <div className="flex justify-between items-center mb-6">
        <input
          type="number"
          value={age || ""}
          onChange={handleAgeChange}
          className="block max-w-[7.8vw] p-3 text-center bg-[#D9D9D9] border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter age"
        />
        <button
          onClick={handleNext}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ${
            !age ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!age}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Age;
