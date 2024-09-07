import React from "react";

export type messageProp = {
    message: String;
};

const MessageComponent = (prop: messageProp) => {
    return <div className="bg-white rounded-xl py-4 px-6 font-normal text-xs">{prop.message}</div>;
};

export default MessageComponent;
