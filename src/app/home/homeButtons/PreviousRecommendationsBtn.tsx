import React from "react";
import { BigBtnStyle } from "../homePageSpecificStyles";
import LeftPointer from "@/app/SVGs/LeftPointer";
import BigBtnRightPointer from "@/app/SVGs/BigBtnRightPointer";

const PreviousRecommendationsBtn = () => {
    return (
        <div className={`${BigBtnStyle} `}>
            <div>
                Previous <br /> recommendations
            </div>
            <BigBtnRightPointer strokeColor="black" class="md:h-6 md:w-6 h-4 w-4" />
        </div>
    );
};

export default PreviousRecommendationsBtn;
