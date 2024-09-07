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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineGraph = () => {
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
    const graphArrowStyle = `h-6 w-6`;
    const graphTypeIndicatorStyle = "h-[2px] w-[25%] bg-black/30";

    return (
        <div ref={lineRef} className="col-span-1  ">
            <div className="md:h-[85%] h-[100%] w-full bg-white p-4 rounded-md ">
                <Line options={options} data={fakeData} />
            </div>

            <div className=" h-[15%] w-full flex py-3 px-2">
                <LeftPointer class={`${graphArrowStyle} cursor-pointer`} />
                <div className=" flex flex-col items-center w-full mt-2 space-y-3">
                    <div className="flex gap-3 w-[70%]">
                        <div className={`bg-black ${graphTypeIndicatorStyle} `}></div>
                        <div className={graphTypeIndicatorStyle}></div>
                        <div className={graphTypeIndicatorStyle}></div>
                        <div className={graphTypeIndicatorStyle}></div>
                    </div>
                    <div className="font-normal text-lg select-none">Mood pattern</div>
                </div>
                <RightPointer class={`${graphArrowStyle} cursor-pointer`} />
            </div>
        </div>
    );
};
export default LineGraph;
