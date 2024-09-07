"use client";
import React from "react";
import { BigBtnStyle } from "../homePageSpecificStyles";
import Image from "next/image";
import PlusIcon from "@/app/SVGs/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import { setActivePanel } from "../../../../redux/features/homePageSlice";
// import plusIcon from "@/public/icons/plus.svg";

const TodayReportBtn = () => {
    const dispatch = useDispatch();

    // const activePanel = useSelector(())

    const activateTodaysReport = () => {
        dispatch(setActivePanel("report"));
    };

    return (
        <div className={`${BigBtnStyle} `} onClick={activateTodaysReport}>
            <div>Today&apos;s Report</div>
            <PlusIcon strokeColor="black" strokeWidth="6" class="md:h-6 md:w-6 h-4 w-4" />
        </div>
    );
};

export default TodayReportBtn;
