import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleContactPopup } from '../../redux/features/contactSlice';
import emailIcon from '@/public/email.png';  // Renamed imports for clarity
import phoneIcon from '@/public/phone-call.png'; 
import { User } from '../../interface';
import { RootState } from '../../redux/store';

export default function ContactPopup() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.certifiedSlice);

  const handleOutsideClick = () => {
    dispatch(toggleContactPopup());
  };

  return (
    <>
      <div>
        <div
          className="h-[100vh] w-[100vw] top-0 left-0 fixed bg-black/40 z-20"
          onClick={handleOutsideClick}  // Close when clicking outside the popup
        ></div>
        <div className="fixed z-30 top-[8%] md:top-[20%] left-[5%] sm:left-[15%] lg:left-[20%] xl:left-[30%] h-[70vh] w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[40%] bg-gray-200 p-4 md:p-8 py-4 md:py-12 flex flex-col items-center rounded-xl text-center max-h-[30rem]">
          <div>
            <img
              className="w-40 aspect-square rounded-full object-cover overflow-hidden"
              src={user.avatar}
              alt={user.name}
            />
          </div>
          <h1 className="text-lg lg:text-xl font-semibold mt-2 md:mt-10">{user.name}</h1>
          <div className="text-sm font-light mt-10">
            <p>{user.name} is a professional psychologist with over 7 years of experience.</p>
          </div>
          <div className="flex  gap-5 justify-center w-full mt-10">
            <div className="flex  gap-2">
              <img className="w-6 aspect-square object-cover" src={emailIcon.src} alt="email icon" />
              <p className="text-sm">{user.email}</p>
            </div>
            <div className="flex  gap-2">
              <img className="w-6 aspect-square object-cover" src={phoneIcon.src} alt="phone icon" />
              <p className="text-sm">987654321</p> {/* Replace with actual user phone if available */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
