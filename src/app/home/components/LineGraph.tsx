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
import { RootState, RootStateType } from "../../../../redux/store";
import {
    setEnergySelected,
    setMoodSelected,
    setSleepSelected,
    setStressSelected,
} from "../../../../redux/features/graphSlice";

// const fakeData1 = {
//     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//         {
//             label: "After",
//             data: [3, 5, 2, 7, 4, 8, 5],
//             borderColor: "Blue",
//             borderWidth: 4,
//         },
//     ],
// };
// const fakeData2 = {
//     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//         {
//             label: "After",
//             data: [6, 5, 3, 7, 6, 9, 8],
//             borderColor: "Blue",
//             borderWidth: 4,
//         },
//     ],
// };
// const fakeData3 = {
//     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//         {
//             label: "After",
//             data: [2, 5, 6, 4, 8, 6, 3],
//             borderColor: "Blue",
//             borderWidth: 4,
//         },
//     ],
// };
// const fakeData4 = {
//     labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S"],
//     datasets: [
//         {
//             label: "After",
//             data: [1, 7, 4, 6, 4, 5, 6, 3, 5, 2],
//             borderColor: "Blue",
//             borderWidth: 4,
//         },
//     ],
// };
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineGraph = () => {
    const lineRef = useRef<HTMLDivElement>(null);

    const isGraphDone = useSelector((state: RootState) => state.graphDataSlice.doneGraphData);
    const mood = useSelector((state: RootState) => state.graphDataSlice.mood);
    const graphDate = useSelector((state: RootState) => state.graphDataSlice.date);
    const energyLevel = useSelector((state: RootState) => state.graphDataSlice.energyLevel);
    const sleepQuality = useSelector((state: RootState) => state.graphDataSlice.sleepQuality);
    const stressLevel = useSelector((state: RootState) => state.graphDataSlice.stressLevel);

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

    const graphArrowStyle = `h-6 w-6`;
    const graphTypeIndicatorStyle = "h-[2px] w-[25%] ";

    return (
        <div ref={lineRef} className="col-span-1  ">
            <div className="md:h-[85%] h-[100%] w-full bg-white p-4 rounded-md ">
                {isMoodSelected && isGraphDone && (
                    <Line
                        options={options}
                        data={{
                            labels: [
                                graphDate[13],
                                graphDate[12],
                                graphDate[11],
                                graphDate[10],
                                graphDate[9],
                                graphDate[8],
                                graphDate[7],
                                graphDate[6],
                                graphDate[5],
                                graphDate[4],
                                graphDate[3],
                                graphDate[2],
                                graphDate[1],
                                graphDate[0],
                            ],
                            datasets: [
                                {
                                    label: "Mood pattern",
                                    data: [
                                        mood[13],
                                        mood[12],
                                        mood[11],
                                        mood[10],
                                        mood[9],
                                        mood[8],
                                        mood[7],
                                        mood[6],
                                        mood[5],
                                        mood[4],
                                        mood[3],
                                        mood[2],
                                        mood[1],
                                        mood[0],
                                    ],
                                    borderColor: "Blue",
                                    borderWidth: 4,
                                },
                            ],
                        }}
                    />
                )}
                {isSleepSelected && isGraphDone && (
                    <Line
                        options={options}
                        data={{
                            labels: [
                                // graphDate[0],
                                // graphDate[1],
                                // graphDate[2],
                                // graphDate[3],
                                // graphDate[4],
                                // graphDate[5],
                                // graphDate[6],
                                // graphDate[7],
                                // graphDate[8],
                                // graphDate[9],
                                // graphDate[10],
                                // graphDate[11],
                                // graphDate[12],
                                // graphDate[13],
                                graphDate[13],
                                graphDate[12],
                                graphDate[11],
                                graphDate[10],
                                graphDate[9],
                                graphDate[8],
                                graphDate[7],
                                graphDate[6],
                                graphDate[5],
                                graphDate[4],
                                graphDate[3],
                                graphDate[2],
                                graphDate[1],
                                graphDate[0],
                            ],
                            datasets: [
                                {
                                    label: "Sleep quality",
                                    data: [
                                        sleepQuality[13],
                                        sleepQuality[12],
                                        sleepQuality[11],
                                        sleepQuality[10],
                                        sleepQuality[9],
                                        sleepQuality[8],
                                        sleepQuality[7],
                                        sleepQuality[6],
                                        sleepQuality[5],
                                        sleepQuality[4],
                                        sleepQuality[3],
                                        sleepQuality[2],
                                        sleepQuality[1],
                                        sleepQuality[0],
                                    ],
                                    borderColor: "Blue",
                                    borderWidth: 4,
                                },
                            ],
                        }}
                    />
                )}
                {isEnergySelected && isGraphDone && (
                    <Line
                        options={options}
                        data={{
                            labels: [
                                graphDate[13],
                                graphDate[12],
                                graphDate[11],
                                graphDate[10],
                                graphDate[9],
                                graphDate[8],
                                graphDate[7],
                                graphDate[6],
                                graphDate[5],
                                graphDate[4],
                                graphDate[3],
                                graphDate[2],
                                graphDate[1],
                                graphDate[0],
                            ],
                            datasets: [
                                {
                                    label: "Energy level",
                                    data: [
                                        energyLevel[13],
                                        energyLevel[12],
                                        energyLevel[11],
                                        energyLevel[10],
                                        energyLevel[9],
                                        energyLevel[8],
                                        energyLevel[7],
                                        energyLevel[6],
                                        energyLevel[5],
                                        energyLevel[4],
                                        energyLevel[3],
                                        energyLevel[2],
                                        energyLevel[1],
                                        energyLevel[0],
                                    ],
                                    borderColor: "Blue",
                                    borderWidth: 4,
                                },
                            ],
                        }}
                    />
                )}
                {isStressSelected && isGraphDone && (
                    <Line
                        options={options}
                        data={{
                            labels: [
                                graphDate[13],
                                graphDate[12],
                                graphDate[11],
                                graphDate[10],
                                graphDate[9],
                                graphDate[8],
                                graphDate[7],
                                graphDate[6],
                                graphDate[5],
                                graphDate[4],
                                graphDate[3],
                                graphDate[2],
                                graphDate[1],
                                graphDate[0],
                            ],
                            datasets: [
                                {
                                    label: "Stress level",
                                    data: [
                                        stressLevel[13],
                                        stressLevel[12],
                                        stressLevel[11],
                                        stressLevel[10],
                                        stressLevel[9],
                                        stressLevel[8],
                                        stressLevel[7],
                                        stressLevel[6],
                                        stressLevel[5],
                                        stressLevel[4],
                                        stressLevel[3],
                                        stressLevel[2],
                                        stressLevel[1],
                                        stressLevel[0],
                                    ],
                                    borderColor: "Blue",
                                    borderWidth: 4,
                                },
                            ],
                        }}
                    />
                )}
            </div>

            <div className=" h-[15%] w-full flex py-3 px-2">
                <div onClick={handleLeftPointer}>
                    <LeftPointer
                        class={`h-6 w-6 cursor-pointer ${
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
                    <div className="font-normal text-lg select-none">{title}</div>
                </div>
                <div onClick={handleRightPointer}>
                    <RightPointer
                        class={`h-6 w-6 cursor-pointer ${
                            isStressSelected ? "opacity-40" : "opacity-100"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default LineGraph;
