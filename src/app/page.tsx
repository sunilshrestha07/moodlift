"use client";
import Section from "@/components/Section";
import SignupPopup from "@/components/SignupPopup";
import Steps from "@/components/Steps";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DailySteps from "@/components/DailySteps";
import popupSlice, { toggleLoginPopup } from "../../redux/features/popupSlice";
import Initstep from "@/components/Initstep";

export default function Page() {
  const loginPopupStatus = useSelector(
    (state: RootState) => state.popupSlice.isLoginPopupOpen
  );

  // const currentUser = useSelector((state: RootState) => state.userSlice);
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => state.userSlice.name);
  useEffect(() => {
    if (currentUser) {
      dispatch(toggleLoginPopup());
    }
  }, []);

  return (
    <>
      <div className="">
        <Section />
        <Steps />
        {!currentUser && loginPopupStatus && <SignupPopup />}

        {/* {loginPopupStatus && <SignupPopup />} */}
      </div>
    </>
  );
}
