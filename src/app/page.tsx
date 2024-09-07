
"use client";
import Section from "@/components/Section";
import SignupPopup from "@/components/SignupPopup";
import Steps from "@/components/Steps";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DailySteps from "@/components/DailySteps";

export default function Page() {
  const loginPopupStatus = useSelector((state: RootState) => state.popupSlice.isLoginPopupOpen);

  const currentUser = useSelector((state: RootState) => state.userSlice);

  return (
    <>
      <div className="">
        <Section />
        <Steps />
        {!currentUser && loginPopupStatus && <SignupPopup />}

        <div className=" items-center mb-10">
          {" "}
          {/* <Initstep /> */}
          <div className="py-10">
            <DailySteps />
          </div>
        </div>
      </div>
    </>
  );
}
