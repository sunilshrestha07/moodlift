"use client";

import React, { useState } from "react";
import { verify } from "../../../interface";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";

export default function Component() {
    const [formData, setFormData] = useState<verify[]>([]);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [educationImage, setEducationImage] = useState<File | null>(null);
    const [otherImage, setOtherImage] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
  
    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
    const [educationImageUrl, setEducationImageUrl] = useState<string | null>(null);
    const [otherImageUrl, setOtherImageUrl] = useState<string | null>(null);
  
    // Handle image selection
    const handleImageChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      type: "profile" | "education" | "other"
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        if (type === "profile") {
          setProfileImage(file);
          setProfileImageUrl(URL.createObjectURL(file));
        } else if (type === "education") {
          setEducationImage(file);
          setEducationImageUrl(URL.createObjectURL(file));
        } else if (type === "other") {
          setOtherImage(file);
          setOtherImageUrl(URL.createObjectURL(file));
        }
      }
    };
  
    // Upload images to Firebase
    const uploadImageToFirebase = async (file: File) => {
      const imageRef = ref(storage, `images/${file.name + v4()}`);
      await uploadBytes(imageRef, file);
      return await getDownloadURL(imageRef);
    };

       //handel change
   const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
 };
  
    // Handle form submission
    const handelSubmit = async (e: React.FormEvent) => {
        setIsUploading(true);
      try {
        e.preventDefault();
  
      // Upload the images to Firebase
      const profileImageUrl = profileImage ? await uploadImageToFirebase(profileImage) : null;
      const educationImageUrl = educationImage ? await uploadImageToFirebase(educationImage) : null;
      const otherImageUrl = otherImage ? await uploadImageToFirebase(otherImage) : null;
  
      // Add the image URLs to the form data
      const completeFormData = {
        ...formData,
        profileImageUrl,
        educationImageUrl,
        otherImageUrl,
      };
      } catch (error :any) {
        setIsUploading(false);
        console.log(`Error uploading documents: ${error.message}`);
      }
    };

   return (
      <div className=" flex justify-center w-full mt-10 ">
         <div className=" pt-6 sm:pt-8 md:pt-10 w-[85%] bg-white  rounded-lg mb-10">
            <div className="flex flex-col items-center">
               <h1 className=" text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Verify Your Professional Credentials
               </h1>
               <p className=" text-sm sm:text-base px-5 text-center">
                  Complete the form to verify your credentials as a mental
                  health professional in Nepal.
               </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8">
               <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={handelSubmit}
               >
                  <div className="grid gap-4">
                     <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                           Full Name
                        </label>
                        <input
                           id="name"
                           onChange={handleChange}
                           placeholder="Enter your full name"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                           Email
                        </label>
                        <input
                           id="email"
                           onChange={handleChange}
                           type="email"
                           placeholder="Enter your email"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                           Phone
                        </label>
                        <input
                           id="phone"
                           onChange={handleChange}
                           type="tel"
                           placeholder="Enter your phone number"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="address"
                           className="text-sm font-medium"
                        >
                           Address
                        </label>
                        <input
                           id="address"
                           onChange={handleChange}
                           placeholder="Enter your address"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                  </div>
                  <div className="grid gap-4">
                     <div className="grid gap-2"></div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="license-type"
                           className="text-sm font-medium"
                        >
                           License Type
                        </label>
                        <div className="relative">
                           <select
                              id="license"
                              onChange={handleChange}
                              className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                           >
                              <option value="" disabled selected>
                                 Select license type
                              </option>
                              <option value="psychologist">Psychologist</option>
                              <option value="psychiatrist">Psychiatrist</option>
                              <option value="counselor">Counselor</option>
                           </select>
                        </div>
                     </div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="license-expiry"
                           className="text-sm font-medium"
                        >
                           License Expiry Date
                        </label>
                        <input
                           onChange={handleChange}
                           id="expiryDate"
                           type="date"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="province-district"
                           className="text-sm font-medium"
                        >
                           Province/District
                        </label>
                        <input
                           id="province"
                           onChange={handleChange}
                           placeholder="Enter your province/district"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                  </div>
                  <div className="col-span-full grid  gap-5 ">
                     <div className="grid gap-5">
                        <label className="text-sm font-medium">
                           Upload Documents
                        </label>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                           <div className="grid gap-2">
                              <label
                                 htmlFor="license-upload"
                                 className="text-sm font-medium"
                              >
                                 Professional License
                              </label>
                              <input
                                 id="licenseImage"
                                 type="file"
                                 accept="image/*"
                                 required
                                 onChange={(e) => handleImageChange(e, "other")}
                                 className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                           </div>
                           <div className="grid gap-2">
                              <label
                                 htmlFor="certificate-upload"
                                 className="text-sm font-medium"
                              >
                                 Educational Certificates
                              </label>
                              <input
                                 id="educationImage"
                                 required
                                 type="file"
                                 accept="image/*"
                                 onChange={(e) => handleImageChange(e, "education")}
                                 className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                           </div>
                           <div className="grid gap-2">
                              <label
                                 htmlFor="id-upload"
                                 className="text-sm font-medium"
                              >
                                 Photo ID
                              </label>
                              <input
                                 id="photoId"
                                 required
                                 type="file"
                                 accept="image/*"
                                 onChange={(e) => handleImageChange(e, "profile")}
                                 className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-full grid gap-4">
                     <div className="grid gap-2">
                        <label
                           htmlFor="workplace"
                           className="text-sm font-medium"
                        >
                           Affiliated Clinic or Institution
                        </label>
                        <input
                           id="workplace"
                           onChange={handleChange}
                           placeholder="Enter the name of your affiliated clinic or institution"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="experience"
                           className="text-sm font-medium"
                        >
                           Years of Experience
                        </label>
                        <input
                           id="experience"
                           onChange={handleChange}
                           type="number"
                           placeholder="Enter your years of experience"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                     <div className="grid gap-2">
                        <label
                           htmlFor="specializations"
                           className="text-sm font-medium"
                        >
                           Specializations
                        </label>
                        <input
                           id="specializations"
                           onChange={handleChange}
                           placeholder="Enter your specializations"
                           className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                     </div>
                  </div>
                  <div className="mt-6 flex  items-center justify-end ">
                     <button
                        type="submit"
                        className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary bg-button"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}