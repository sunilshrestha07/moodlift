// export default function Home() {
//   return <></>;
// }
"use client";
import Section from "@/components/Section";
import SignupPopup from "@/components/SignupPopup";

import Steps from "@/components/Steps";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import Initstep from "@/components/Initstep";
import DailySteps from "@/components/DailySteps";

export default function Page() {
  const loginPopupStatus = useSelector(
    (state: RootState) => state.popupReducer.isLoginPopupOpen
  );

  return (
    <>
      <div className="">
        <Section />
        <Steps />
        {loginPopupStatus && <SignupPopup />}

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
