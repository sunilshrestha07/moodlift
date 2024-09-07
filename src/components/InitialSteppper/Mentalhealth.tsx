// "use client";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../../../redux/store";
// import {
//   setPreviousDiagnosis,
//   setCurrentStep,
// } from "../../../redux/features/initialQsnsSlice";

// const options = [
//   "No",
//   "PTSD",
//   "Depression",
//   "Anxiety Disorders",
//   "OCD",
//   "ADHD",
//   "Eating Disorders",
//   "Autism Spectrum Disorder",
//   "Not professionally diagnosed",
// ];

// const buttonStyles = `text-[2vh] px-3 py-2 sm:py-4 bg-white border shadow-lg rounded-lg text-black hover:bg-blue-100 focus:bg-blue-100 transition duration-300`;

// const Mentalhealth: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const selectedOptions = useSelector(
//     (state: RootState) => state.initialQsnsSlice.previousDiagnoses
//   );
//   const currentStep = useSelector(
//     (state: RootState) => state.initialQsnsSlice.currentStep
//   );

//   const handleOptionClick = (option: string) => {
//     if (selectedOptions.includes(option)) {
//       // Deselect the option
//       const updatedOptions = selectedOptions.filter((item) => item !== option);
//       dispatch(setPreviousDiagnosis(updatedOptions));
//     } else if (selectedOptions.length < 3) {
//       // Select the option
//       const updatedOptions = [...selectedOptions, option];
//       dispatch(setPreviousDiagnosis(updatedOptions));
//     }
//   };

//   const handleConfirm = () => {
//     if (selectedOptions.length > 0) {
//       dispatch(setCurrentStep(currentStep + 1));
//     }
//   };

//   return (
//     <div>
//       <label className="block text-xs sm:text-sm lg:text-lg font-medium mb-2">
//         Select your mental health condition :
//       </label>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 sm:pr-8">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionClick(option)}
//             className={`${buttonStyles}`}
//             style={{
//               backgroundColor: selectedOptions.includes(option)
//                 ? "#dbeafe"
//                 : "white",
//             }}
//             disabled={
//               !selectedOptions.includes(option) && selectedOptions.length >= 3
//             }
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <button
//         onClick={handleConfirm}
//         className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${
//           selectedOptions.length === 0 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         disabled={selectedOptions.length === 0}
//       >
//         Confirm
//       </button>
//     </div>
//   );
// };

// export default Mentalhealth;
//mathi ko limit wala tala ko no limit
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  setPreviousDiagnosis,
  setCurrentStep,
} from "../../../redux/features/initialQsnSlice";
import { buttonStyles, smallButtonsPaddingStyles } from "./Gender"; // Reuse styles from Gender component

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
  const dispatch = useDispatch<AppDispatch>();
  const selectedOptions = useSelector(
    (state: RootState) => state.initialQsnSlice.previousDiagnoses
  );
  const currentStep = useSelector(
    (state: RootState) => state.initialQsnSlice.currentStep
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

  const handleConfirm = () => {
    if (selectedOptions.length > 0) {
      dispatch(setCurrentStep(currentStep + 1));
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
              backgroundColor: selectedOptions.includes(option)
                ? "#dbeafe"
                : "white",
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
