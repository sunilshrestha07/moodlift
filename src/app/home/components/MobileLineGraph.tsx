"use client";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from "chart.js";

import LeftPointer from "@/app/SVGs/LeftPointer";
import RightPointer from "@/app/SVGs/RightPointer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
    setEnergySelected,
    setMoodSelected,
    setSleepSelected,
    setStressSelected,
} from "../../../../redux/features/graphSlice";

const fakeData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "After",
            data: [1200, 3200, 4000, 2300, 3000, 4000, 8765],
            borderColor: "Blue",
            borderWidth: 4,
        },
    ],
};
const fakeData1 = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "After",
            data: [3, 5, 2, 7, 4, 8, 5],
            borderColor: "Blue",
            borderWidth: 4,
        },
    ],
};
const fakeData2 = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "After",
            data: [6, 5, 3, 7, 6, 9, 8],
            borderColor: "Blue",
            borderWidth: 4,
        },
    ],
};
const fakeData3 = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "After",
            data: [2, 5, 6, 4, 8, 6, 3],
            borderColor: "Blue",
            borderWidth: 4,
        },
    ],
};
const fakeData4 = {
    labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "After",
            data: [1, 7, 4, 6, 4, 5, 6, 3, 5, 2],
            borderColor: "Blue",
            borderWidth: 4,
        },
    ],
};
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const MobileLineGraph = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [graphWidth, setGraphWidth] = useState(0);
    const [graphHeight, setGraphHeight] = useState(0);

    useEffect(() => {
        const graphObserver = new ResizeObserver((entries) => {
            if (entries[0]) {
                const { height, width } = entries[0].contentRect;
                setGraphHeight(height);
                setGraphWidth(width);
                // console.log({ width: width, height: height });
            }
        });
        if (lineRef.current) {
            graphObserver.observe(lineRef.current);
        }
        return () => {
            graphObserver.disconnect();
        };
    }, []);
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            // title: {
            //     display: false,
            // },
            legend: {
                display: false,
            },
        },
    };

    const isMoodSelected = useSelector((state: RootState) => state.graphSlice.isMoodSelected);
    const isSleepSelected = useSelector((state: RootState) => state.graphSlice.isSleepSelected);
    const isEnergySelected = useSelector((state: RootState) => state.graphSlice.isEnergySelected);
    const isStressSelected = useSelector((state: RootState) => state.graphSlice.isStressSelected);

    const title = useSelector((state: RootState) => state.graphSlice.title);

    const dispatch = useDispatch();

    const handleRightPointer = () => {
        if (isMoodSelected) {
            dispatch(setSleepSelected());
        } else if (isSleepSelected) {
            dispatch(setEnergySelected());
        } else if (isEnergySelected) {
            dispatch(setStressSelected());
        } else if (isStressSelected) {
            // dispatch(setSleepSelected());
        }
    };
    const handleLeftPointer = () => {
        if (isMoodSelected) {
            // dispatch(setSleepSelected());
        } else if (isSleepSelected) {
            dispatch(setMoodSelected());
        } else if (isEnergySelected) {
            dispatch(setSleepSelected());
        } else if (isStressSelected) {
            dispatch(setEnergySelected());
        }
    };

    const graphArrowStyle = `h-4 w-4`;
    const graphTypeIndicatorStyle = "h-[2px] w-[25%] bg-black/30";

    return (
        <div ref={lineRef} className="h-full ">
            <div className="md:h-[85%] h-[100%] w-full bg-white p-4 rounded-md ">
                {isMoodSelected && <Line options={options} data={fakeData1} />}
                {isSleepSelected && <Line options={options} data={fakeData2} />}
                {isEnergySelected && <Line options={options} data={fakeData3} />}
                {isStressSelected && <Line options={options} data={fakeData4} />}
            </div>

            <div className=" h-[15%] w-full flex py-3 px-2">
                {/* <LeftPointer class={`${graphArrowStyle}`} /> */}
                <div onClick={handleLeftPointer}>
                    <LeftPointer
                        class={`h-4 w-4 cursor-pointer ${
                            isMoodSelected ? "opacity-40" : "opacity-100"
                        }`}
                    />
                </div>
                <div className=" flex flex-col items-center w-full mt-2 space-y-3">
                    <div className="flex gap-3 w-[70%]">
                        <div
                            className={` ${graphTypeIndicatorStyle} ${
                                isMoodSelected ? "bg-black/70" : "bg-black/15"
                            }`}
                        ></div>
                        <div
                            className={`${graphTypeIndicatorStyle} ${
                                isSleepSelected ? "bg-black/70" : "bg-black/15"
                            }`}
                        ></div>
                        <div
                            className={`${graphTypeIndicatorStyle} ${
                                isEnergySelected ? "bg-black/70" : "bg-black/15"
                            }`}
                        ></div>
                        <div
                            className={`${graphTypeIndicatorStyle} ${
                                isStressSelected ? "bg-black/70" : "bg-black/15"
                            }`}
                        ></div>
                    </div>
                    <div className="font-normal text-sm select-none">{title}</div>
                </div>
                {/* <RightPointer class={graphArrowStyle} /> */}
                <div onClick={handleRightPointer}>
                    <RightPointer
                        class={`h-4 w-4 cursor-pointer ${
                            isStressSelected ? "opacity-40" : "opacity-100"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};
export default MobileLineGraph;
