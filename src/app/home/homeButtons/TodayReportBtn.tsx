"use client";
import React from "react";
import { BigBtnStyle } from "../homePageSpecificStyles";
import Image from "next/image";
import PlusIcon from "@/app/SVGs/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import { setReportActive } from "../../../../redux/features/homePageSlice";
import { RootState } from "../../../../redux/store";
// import plusIcon from "@/public/icons/plus.svg";

const TodayReportBtn = () => {
    const dispatch = useDispatch();

    const isRecommendationActive = useSelector(
        (state: RootState) => state.homePageSlice.isRecommendationActive
    );
    const isReportActive = useSelector((state: RootState) => state.homePageSlice.isReportActive);

    const activateTodaysReport = () => {
        dispatch(setReportActive());
    };

    return (
        <div
            className={`cursor-pointer  px-4 py-6 md:px-6 md:py-6 rounded-xl min-w-[5rem] max-w-[45rem]  w-full  justify-center text-center   text-xs sm:text-sm lg:text-lg flex items-center gap-2 md:gap-8 ${
                isReportActive && "bg-gray-400"
            } bg-white `}
            onClick={activateTodaysReport}
        >
            <div>Today&apos;s Report</div>
            <PlusIcon strokeColor="black" strokeWidth="6" class="md:h-6 md:w-6 h-4 w-4" />
        </div>
    );
};

export default TodayReportBtn;
