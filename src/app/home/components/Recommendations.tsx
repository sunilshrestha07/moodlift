"use client";

import React, { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";
import { startRecommendationFetch } from "../../../../redux/features/homePageSlice";
import Image from "next/image";
import loading from "@/public/icons/loading.svg";

const Recommendations = () => {
    const [apiRes, setAiRes] = useState<string>();
    const [userInfos, setUserInfos] = useState("");
    const isRecommendationLoading = useSelector(
        (state: RootState) => state.homePageSlice.isRecommendationLoading
    );
    const fetchRecommendation = useSelector(
        (state: RootState) => state.homePageSlice.fetchRecommendation
    );
    const fetchUserActivities = useSelector(
        (state: RootState) => state.homePageSlice.fetchUserActivities
    );
    const isRecommendationActive = useSelector(
        (state: RootState) => state.homePageSlice.isRecommendationActive
    );

    const dispatch = useDispatch();
    const genAI = new GoogleGenerativeAI("AIzaSyDRThm0aYUHqxAyyFVt8p0ufVFS0pS-0t4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const userId = useSelector((state: RootState) => state.userSlice._id);

    useEffect(() => {
        const getActivitiesOfUser = async () => {
            const res = await fetch(`/api/user/${userId}/getUser`);
            const response = await res.json();

            console.log({ response: response.activityInfo });
            const stringActivityInfo = JSON.stringify(response.activityInfo);
            console.log({ stringifiedData: stringActivityInfo });

            setUserInfos(stringActivityInfo);
        };

        getActivitiesOfUser();

        setTimeout(() => {
            dispatch(startRecommendationFetch());
        }, 1200);
    }, [isRecommendationActive]);

    useEffect(() => {
        const getResFromGemini = async () => {
            const result: GenerateContentResult = await model.generateContent(
                `you are a friendly male professional psychiatrist named Bruno and i want a recommendation and feedback from you. my data is as follows. I want you to analyze all this data of me and give me feedback and recommendation based on the trends and patterns you see. Keep the response within 50 words and use a tone of language that is considerate of soft hearted people ${userInfos}`
            );
            const resText = result.response.text();

            setAiRes(resText);
        };

        setTimeout(() => {
            getResFromGemini();
        }, 1200);
    }, [fetchRecommendation]);

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full min-h-[20rem]">
            {isRecommendationLoading && <div className="">Loading...</div>}
            {isRecommendationLoading && <Image src={loading} alt="loading" className="h-8 w-8" />}
            <h2 className="text-xl font-semibold mb-4 ">Previous Recommendations</h2>
            <p>{apiRes}</p>
        </div>
    );
};

export default Recommendations;
