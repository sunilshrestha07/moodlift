import React from "react";
import { svgProp } from "../../../types";

const PlusIcon = (prop: svgProp) => {
    return (
        <svg
            width="55"
            height="50"
            viewBox="0 0 55 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={prop.class}
        >
            <path
                d="M27.4814 3L27.4814 47.327"
                stroke={prop.strokeColor || "white"}
                strokeWidth={prop.strokeWidth || "5"}
                strokeLinecap="round"
            />
            <path
                d="M3 25.9843H51.963"
                stroke={prop.strokeColor || "white"}
                strokeWidth={prop.strokeWidth || "5"}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default PlusIcon;
