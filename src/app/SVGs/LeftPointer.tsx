import React from "react";

const LeftPointer = (prop: svgProp) => {
    return (
        <svg
            width="26"
            height="39"
            viewBox="0 0 26 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={prop.class}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.7986 37.5218C22.3407 38.9377 19.9439 38.969 18.4452 37.5918L1.16319 21.7119C0.408589 21.0185 -0.00632408 20.0596 0.0180745 19.0654C0.042473 18.0712 0.503976 17.1315 1.29179 16.4719L19.3342 1.36564C20.8989 0.0555642 23.2916 0.191796 24.6784 1.66992C26.0652 3.14805 25.921 5.40833 24.3563 6.71841L9.36496 19.2701L23.7245 32.4647C25.2232 33.8418 25.2564 36.106 23.7986 37.5218Z"
                fill={prop.bgColor || "black"}
            />
        </svg>
    );
};

export default LeftPointer;
