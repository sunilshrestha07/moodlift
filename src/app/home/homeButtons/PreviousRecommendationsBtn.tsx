"use client";
import React from "react";
import { BigBtnStyle } from "../homePageSpecificStyles";
import LeftPointer from "@/app/SVGs/LeftPointer";
import BigBtnRightPointer from "@/app/SVGs/BigBtnRightPointer";
import { setActivePanel } from "../../../../redux/features/homePageSlice";
import { useDispatch } from "react-redux";

const PreviousRecommendationsBtn = () => {
    const dispatch = useDispatch();

    const activateRecommendationPanel = () => {
        dispatch(setActivePanel("recommendation"));
    };
    return (
        <div className={`${BigBtnStyle} `} onClick={activateRecommendationPanel}>
            <div>
                Previous <br /> recommendations
            </div>
            <BigBtnRightPointer strokeColor="black" class="md:h-6 md:w-6 h-4 w-4" />
        </div>
    );
};

export default PreviousRecommendationsBtn;
