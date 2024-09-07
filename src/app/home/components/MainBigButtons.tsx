import React from "react";
import TodayReportBtn from "../homeButtons/TodayReportBtn";
import PreviousRecommendationsBtn from "../homeButtons/PreviousRecommendationsBtn";

const MainBigButtons = () => {
    return (
        <div className="flex  gap-2 md:gap-6 justify-between ">
            <TodayReportBtn />
            <PreviousRecommendationsBtn />
            {/* <PreviousRecommendationsBtn /> */}
        </div>
    );
};

export default MainBigButtons;
