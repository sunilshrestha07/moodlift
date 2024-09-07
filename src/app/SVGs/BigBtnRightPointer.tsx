import React from "react";
import { svgProp } from "../types";

const BigBtnRightPointer = (prop: svgProp) => {
    return (
        <svg
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={prop.class}
        >
            <path
                d="M3 3L31.6878 22.2635C32.2973 22.6727 32.2727 23.5775 31.6418 23.953L3 41"
                stroke={prop.strokeColor || "#A3A3A3"}
                strokeWidth={prop.strokeWidth || "6"}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default BigBtnRightPointer;
