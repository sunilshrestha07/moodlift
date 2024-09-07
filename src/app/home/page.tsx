"use client";
import React, { useEffect } from "react";
import { AIGreetHistory } from "./components/AIGreetHistory";
import LineGraph from "./components/LineGraph";
import MainBigButtons from "./components/MainBigButtons";
import MobileLineGraph from "./components/MobileLineGraph";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SignupPopup from "@/components/SignupPopup";
import { pagePadding } from "../globalStyles";
import DailyStepper from "@/components/DailySteps";
import Recommendations from "./components/Recommendations";
import Stepper from "@/components/Stepper";
import NewUserPopup from "../NewUserPopups/NewUserPopup";
import { toggleLoginPopup } from "../../../redux/features/popupSlice";
import {
  setDoneGraphData,
  setGraphDate,
  setGraphEnergyLevel,
  setGraphMood,
  setGraphStressLevel,
  setGraphSleepQuality,
} from "../../../redux/features/graphDataSlice";

const HomePage = () => {
  const loginPopupStatus = useSelector(
    (state: RootState) => state.popupSlice.isLoginPopupOpen
  );
  // const isUserAuthorized = useSelector((state: RootState) => state.userSlice.isAuthenticated);
  const isReportOpen = useSelector(
    (state: RootState) => state.homePageSlice.isReportActive
  );
  const isRecommendationActive = useSelector(
    (state: RootState) => state.homePageSlice.isRecommendationActive
  );
  const dispatch = useDispatch();
  // const currentUser = useSelector((state: RootState) => state.userSlice);
  const isInitialQuestionVisible = useSelector(
    (state: RootState) => state.initialQsnSlice.isInitialQuestionVisible
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.userSlice.isAuthenticated
  );
  const currentUser = useSelector((state: RootState) => state.userSlice.name);

  const userId = useSelector((state: RootState) => state.userSlice._id);

  useEffect(() => {
    if (currentUser) {
      dispatch(toggleLoginPopup());
    }

    const fetchLineData = async () => {
      const fakeUserId = "66dc9faf6b4ba10f4bc4c9d4";
      // const data = await fetch(`/api/chatbot/${userId}/getMess`);
      const res = await fetch(`/api/chatbot/${fakeUserId}/getMess`);
      const data = await res.json();
      const dataForGraph = data.messObject;
      const dates: string[] = [];
      const moods: number[] = [];
      const stressLevels: number[] = [];
      const energyLevels: number[] = [];
      const sleepQualities: number[] = [];

      dataForGraph.forEach((element: any) => {
        dates.push(element.date);
        moods.push(element.mood);
        stressLevels.push(element.stressLevel);
        energyLevels.push(element.energyLevel);
        sleepQualities.push(element.SleepQuality);
      });

      dispatch(setGraphDate(dates));
      dispatch(setGraphMood(moods));
      dispatch(setGraphStressLevel(stressLevels));
      dispatch(setGraphEnergyLevel(energyLevels));
      dispatch(setGraphSleepQuality(sleepQualities));

      dispatch(setDoneGraphData());
      // console.log(dataForGraph);
    };
    fetchLineData();
  }, []);

  return (
    <div>
      {!currentUser && loginPopupStatus && <SignupPopup />}
      {isInitialQuestionVisible && isAuthenticated && <NewUserPopup />}

      {!currentUser && loginPopupStatus && <SignupPopup />}
      <div
        className={`relative ${pagePadding} bg-[#E4F3FF] min-h-[100vh] py-6`}
      >
        <div className="absolute top-0 right-0 h-full w-full bg-[#B1B0FF]/30"></div>

        <div className="md:hidden relative z-10">
          {/* To show in mobile view adsf */}
          <div className=" h-[50vh] w-full">
            <AIGreetHistory />
          </div>
          <div className="h-[45vh] mt-6">
            <MobileLineGraph />
          </div>
          <div className="mt-20">
            <MainBigButtons />
          </div>
          {isReportOpen && <DailyStepper />}
          {isRecommendationActive && <Recommendations />}
          {/*  */}
        </div>

        {/* To show in desktop view */}
        <div className="hidden md:grid grid-cols overflow-hidden gap-[5vh] relative z-10 mt-6">
          <div id="homeFirstRow" className=" grid grid-cols-2 h-[50vh] gap-12">
            <AIGreetHistory />
            <LineGraph />
          </div>
          <div className="h-[2px] w-full bg-black/20 mt-12 rounded-sm"></div>
          <MainBigButtons />
          {isReportOpen && <DailyStepper />}
          {isRecommendationActive && <Recommendations />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
