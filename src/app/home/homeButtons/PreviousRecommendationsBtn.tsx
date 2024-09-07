"use client";
import React from "react";
import { BigBtnStyle } from "../homePageSpecificStyles";
import LeftPointer from "@/app/SVGs/LeftPointer";
import BigBtnRightPointer from "@/app/SVGs/BigBtnRightPointer";
import { setRecommendationActive } from "../../../../redux/features/homePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const PreviousRecommendationsBtn = () => {
    const dispatch = useDispatch();

    const isRecommendationActive = useSelector(
        (state: RootState) => state.homePageSlice.isRecommendationActive
    );

    const activateRecommendationPanel = () => {
        dispatch(setRecommendationActive());
    };
    return (
        <div
            className={`cursor-pointer   px-4 py-6 md:px-6 md:py-6 rounded-xl min-w-[5rem] max-w-[45rem]  w-full  justify-center text-center   text-xs sm:text-sm lg:text-lg flex items-center gap-2 md:gap-8 ${
                isRecommendationActive ? "bg-gray-100" : "bg-white"
            }`}
            onClick={activateRecommendationPanel}
        >
            <div>
                Previous <br /> recommendations
            </div>
            <BigBtnRightPointer strokeColor="black" class="md:h-6 md:w-6 h-4 w-4" />
        </div>
    );
};

export default PreviousRecommendationsBtn;
