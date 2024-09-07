import React from "react";

const RightPointer = (prop: svgProp) => {
    return (
        <svg
            width="25"
            height="36"
            viewBox="0 0 25 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={prop.class}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.64057 34.6846C2.94203 36.0717 5.18716 36.1998 6.65521 34.9707L23.5831 20.7978C24.3223 20.1789 24.7552 19.2972 24.778 18.3643C24.8007 17.4315 24.4113 16.5316 23.7032 15.8809L7.48507 0.978326C6.07858 -0.314084 3.82961 -0.284933 2.46185 1.04344C1.09409 2.3718 1.1255 4.49636 2.53199 5.78877L16.0075 18.1713L1.9422 29.9474C0.474148 31.1766 0.3391 33.2975 1.64057 34.6846Z"
                fill={prop.bgColor || "black"}
            />
        </svg>
    );
};

export default RightPointer;
