"use client";

import React, { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";

const Recommendations = () => {
    const [apiRes, setAiRes] = useState<string>();
    const isRecommendationLoading = useSelector(
        (state: RootState) => state.homePageSlice.isRecommendationLoading
    );
    const fetchRecommendation = useSelector(
        (state: RootState) => state.homePageSlice.fetchRecommendation
    );
    const genAI = new GoogleGenerativeAI("AIzaSyDRThm0aYUHqxAyyFVt8p0ufVFS0pS-0t4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `you are a professional psychiatrist and i want a recommendation and feedback from you. my name is `;

    useEffect(() => {
        const getResFromGemini = async () => {
            const result: GenerateContentResult = await model.generateContent(prompt);
            const resText = result.response.text();
            setAiRes(resText);

            console.log(resText);
        };

        getResFromGemini();
    }, [fetchRecommendation]);

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full min-h-[20rem]">
            {isRecommendationLoading && <div className="">Loading...</div>}
            <h2 className="text-xl font-semibold mb-4 ">Previous Recommendations</h2>
            <p>{apiRes}</p>
        </div>
    );
};

export default Recommendations;
