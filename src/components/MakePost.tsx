"use client";

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import FetchPost from "./FetchPost";
import trophy from "@/public/trophy.png";
import celebration from "@/public/party.png";
import thoughts from "@/public/thought.png";
import { RootState } from "../../redux/store";
import anonymous from "@/public/anonymous.png";

export default function MakePost() {
    const achievements = [
        { name: "Personal Achievement", image: trophy },
        { name: "Celebration", image: celebration },
        { name: "Thoughts", image: thoughts },
    ];
    const currentUser = useSelector((state: RootState) => state.userSlice._id);

    const [selectedAchievements, setSelectedAchievements] = useState<string[]>([]);
    const [postContent, setPostContent] = useState<string>("");
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [refetchdata, setRefetchdata] = useState<boolean>(false);
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

    const handleAchievementChange = (item: string) => {
        if (selectedAchievements.includes(item)) {
            setSelectedAchievements(
                selectedAchievements.filter((achievement) => achievement !== item)
            );
        } else {
            setSelectedAchievements([...selectedAchievements, item]);
        }
    };

    console.log(isAnonymous);
    const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRefetchdata(false);
        setIsUploading(true);
        try {
            const formdata = {
                content: postContent,
                achievements: selectedAchievements,
                owner: currentUser,
                isAnonymous: isAnonymous,
            };
            console.log(formdata);
            const res = await axios.post("/api/post", formdata);
            if (res.status === 200) {
                setSelectedAchievements([]);
                setPostContent("");
                setRefetchdata(true);
                setIsUploading(false);
                setIsAnonymous(false);
            }
        } catch (error: any) {
            setRefetchdata(false);
            console.log(`Error creating post ${error.message}`);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center pb-10">
            <div className="w-[90%] sm:w-[80%] h-full mt-5 rounded-lg">
                <div className="w-full">
                    <div className="font-medium text-lg md:text-xl px-3 sm:px-5 mt-10 mb-6">
                        Create a Post
                    </div>
                    <form onSubmit={currentUser ? handlePostSubmit : ()=>alert("Please login to post")}>
                        <div className="shadow-alldirection p-5 rounded-lg bg-white">
                            <div className=" flex w-full justify-between">
                                <div className="flex flex-row gap-3 flex-wrap">
                                    {achievements.map((item, index) => (
                                        <div
                                            className={`px-3 sm:px-5 py-1 sm:py-2 rounded-md border-gray-200 border-2 text-xs sm:text-sm xl:text-sm flex flex-row gap-1 justify-center items-center cursor-pointer ${
                                                selectedAchievements.includes(item.name)
                                                    ? "bg-gray-300"
                                                    : ""
                                            }`}
                                            onClick={() => handleAchievementChange(item.name)}
                                            key={index}
                                        >
                                            {item.name}
                                            <img
                                                className=" h-3 sm:h-4 object-contain"
                                                src={item.image.src}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={`px-3 sm:px-5 py-1 sm:py-2 rounded-md border-gray-200 border-2 text-xs sm:text-sm xl:text-sm flex flex-row gap-1 justify-center items-center cursor-pointer ${
                                        isAnonymous ? "bg-gray-300" : ""
                                    }`}
                                    onClick={() => setIsAnonymous(!isAnonymous)}
                                >
                                    <p>Anonymous</p>
                                    <div className=" flex justify-center items-center ml-1">
                                        <img
                                            className=" h-4 sm:h-5 object-contain overflow-hidden"
                                            src={anonymous.src}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <textarea
                                    className="w-full aspect-[16/5] sm:aspect-[16/3] p-5 bg-gray-100 text-sm lg:text-xl rounded-lg outline-none opacity-90 resize-none"
                                    placeholder="Share your thoughts"
                                    value={postContent}
                                    onChange={(e) => setPostContent(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className={`py-2 flex flex-col items-center justify-center px-3 bg-[#6F5FFF] rounded-lg text-sm lg:text-base text-white w-[25%] ${
                                        isUploading ? "opacity-80" : ""
                                    }`}
                                    disabled={isUploading}
                                >
                                    {isUploading ? (
                                        <div className="">
                                            <span className="loader"></span>
                                        </div>
                                    ) : (
                                        "Share"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-gray-300 w-full h-[3px] mt-16 mb-5 rounded-xl relative">
                <div className="font-normal absolute top-[-320%] left-1/2 transform -translate-x-1/2 bg-[#F9F9FF] px-1">
                    <p className="opacity-50">Community</p>
                </div>
            </div>

            <div className=" w-[90%] sm:w-[80%] h-full mt-5 rounded-lg">
                <FetchPost refetchdata={refetchdata} />
            </div>
        </div>
    );
}
