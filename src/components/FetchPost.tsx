"use client";

import React, { useEffect, useState } from "react";
import { Post, User } from "../../interface";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleLoginPopup } from "../../redux/features/popupSlice";
import trophy from "@/public/trophy.png";
import celebration from "@/public/party.png";
import thoughts from "@/public/thought.png";
import more from "@/public/more.png";
import anonymous from "@/public/anonymous.png"
import check from "@/public/check.png";
import ContactPopup from "./ContactPopup";
import { toggleContactPopup } from "../../redux/features/contactSlice";
import { setUserForContactPopup } from "../../redux/features/certifiedSlice";

// images
const thoughtImg = trophy;
const celebrationImg = celebration;
const achievementImg = thoughts;

export default function Allpost({ refetchdata }: any) {
   const [post, setPost] = useState<Post[]>([]);
   const [message, setMessage] = useState<{ [key: string]: string }>({});
   const [showDelete, setShowDelete] = useState<boolean>(true);
   const [selectedPostid, setSelectedPostid] = useState<string>("");
   const [isuploading, setIsuploading] = useState<{ [key: string]: boolean }>({});
   const [showcommentdelete, setShowcommentdelete] = useState<boolean>(false);
   const [selectedCommentId, setSelectedCommentId] = useState<string>("");
   const [showAllcomments, setShowAllcomments] = useState<boolean>(false);
   const [extendedPostId, setExtendedPostId] = useState<string>("");
   const [isLiking, setIsLiking] = useState<boolean>(false);
   const [isfetching, setIsfetching] = useState<boolean>(false);
   const currentUser = useSelector((state: RootState) => state.userSlice._id);
   const iscontactPopupOpen = useSelector((state: RootState) => state.contactSlice.iscontactPopupOpen);
   const dispatch = useDispatch();

   const initalcomment = 1;

   //handel less or more
   const handelShowMoreLess = (id: string) => {
      setExtendedPostId(id);
      setShowAllcomments(!showAllcomments);
   };

   //current user

   //fetch data
   const fetchData = async () => {
      setIsfetching(true);
      try {
         const res = await axios.get("/api/post");
         if (res.status === 200) {
            setPost(res.data.posts);
            setIsfetching(false);
         }
      } catch (error) {
         setIsfetching(false);
         console.log(error);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);


   //new fetch
   const refetch = async () => {
      try {
         const res = await axios.get("/api/post");
         if (res.status === 200) {
            setPost(res.data.posts);
         }
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchData();
   }, [refetchdata]);

   //handel like
   const handelLike = async (postId: string, userId: string) => {
      {!currentUser}{
         alert("Please login to like")
      }
      setIsLiking(true);
   
       // Optimistic UI update
       setPost(prevPosts =>
         prevPosts.map(post =>
           post._id === postId
             ? {
                 ...post,
                 totallikes: post.Likes.includes(userId)
                   ? post.totallikes - 1
                   : post.totallikes + 1,
                 Likes: post.Likes.includes(userId)
                   ? post.Likes.filter(id => id !== userId)
                   : [...post.Likes, userId]
               }
             : post
         )
       );
   
       const formdata = {
         userId
       };
   
       try {
         const res = await axios.put(`/api/post/${postId}`, formdata);
         if (res.status === 200) {
           refetch(); // Fetch the latest data to ensure consistency
         }
       } catch (error: any) {
         console.log("Error liking post", error.message);
       } finally {
         setIsLiking(false);
       }
   };

   //handel comment submit
const handelcommentSubmit = async (post: string, user: string) => {
   if(!currentUser){
     alert("Please login to comment")
   }
   try {
      setIsuploading((prev) => ({ ...prev, [post]: true }));
      const formdata = {
                     user,
                     post,
                     message: message[post] || "",
                 };

                 const res = await axios.post("/api/comments", formdata);
      if (res.status === 200) {
        refetch(); // Fetch the latest data to ensure consistency
        setMessage((prevMessage) => ({ ...prevMessage, [post]: "" }));
            setIsuploading((prev) => ({ ...prev, [post]: false }));
      }
    } catch (error: any) {
      setIsuploading((prev) => ({ ...prev, [post]: false }));
        console.log("Error submitting comment", error.message);
    } finally {
      setIsLiking(false);
      setIsuploading((prev) => ({ ...prev, [post]: false }));
    }
};

  

   //handel show delete
   const handelshowDeletePost = (id: string) => {
      setSelectedPostid(id);
      setShowDelete(!showDelete);
   };

   //handel delete post
   const handelDeletePost = async (id: string) => {
      try {
         const res = await axios.delete(`api/post/${id}`);
         if (res.status === 200) {
            setShowDelete(false);
            refetch();
         }
      } catch (error: any) {
         console.log("Error deleting user", error.message);
      }
   };

   //handle show commet delete dots
   const handelcommentdeleteshow = (id: string) => {
      setSelectedCommentId(id);
      setShowcommentdelete(!showcommentdelete);
   };

   //handel comment delete
   const handelCommentDelete = async (id: string) => {
      try {
         const res = await axios.delete(`api/comments/${id}`);
         if (res.status === 200) {
            refetch();
         }
      } catch (error: any) {
         console.log("Error deleting comment", error.message);
      }
   };

   //handel popup
   const handelShowProfile =(user:User)=>{
      dispatch(toggleContactPopup())
      dispatch(setUserForContactPopup(user))
   }

   return (
      <>
         <div className="">
            <div className="">
            {iscontactPopupOpen && <ContactPopup/>}
            </div>
            <div className="w-full">
               {isfetching ? (
                  <div className=" w-full h-full flex justify-center items-center">
                     <span className="loaderblack"></span>
                  </div>
               ) : (
                  <div className="">
                     {post && post.length > 0 ? (
                        <div className="">
                           {post.map((item) => (
                              <div
                                 className=" shadow-alldirection rounded-md overflow-hidden my-16"
                                 key={item._id}
                              >
                                 {/* userinfo */}
                                 <div className="p-5">
                                    <div className="flex flex-row justify-between">
                                       <div className=" flex items-end gap-3 ">
                                          {item.isAnonymous ? (
                                             <div className="">
                                                 <img
                                                      className=" w-[30px] sm:w-[40px] aspect-square overflow-hidden object-cover rounded-full"
                                                      src={anonymous.src}
                                                      alt=""
                                                   />
                                             </div>
                                          ):(
                                             <div className="">
                                                { item.user.avatar ? (
                                                   <div className="">
                                                      {item.user.isCertified ? (
                                                         <div className="">
                                                            <div className="">
                                                               <img
                                                               className=" w-[30px] sm:w-[40px] aspect-square overflow-hidden object-cover rounded-full cursor-pointer"
                                                               onClick={()=>handelShowProfile(item.user)}
                                                               src={item.user.avatar}
                                                               alt=""
                                                            />
                                                       </div>
                                                         </div>
                                                      ):(
                                                         <div className="">
                                                            <div className="">
                                                               <img
                                                               className=" w-[30px] sm:w-[40px] aspect-square overflow-hidden object-cover rounded-full"
                                                               src={item.user.avatar}
                                                               alt=""
                                                            />
                                                         </div>
                                                         </div>
                                                      )}
                                                   </div>
                                          ) : (
                                             <div className="w-[30px] sm:w-[40px] aspect-square overflow-hidden object-cover rounded-full bg-blue-500">
                                                {item.user.name.slice(0, 1)}
                                             </div>
                                          )}
                                             </div>
                                          )}
                                          <div className=" ">
                                             {item.isAnonymous ? (
                                                <p className="capitalize font-medium text-sm sm:text-xl">
                                                   Anonymous
                                                </p>
                                             ):(
                                                <div className=" flex justify-center items-center">
                                                   <p className="capitalize font-medium text-sm sm:text-xl flex">
                                                   {item.user.name}
                                                   <p>{item.user.isCertified && (
                                                      <img className="w-4 sm:w-5 aspect-square object-contain overflow-hidden ml-2 items-end " src={check.src} alt="" />
                                                   )}</p>
                                                </p>
                                                </div>
                                             )}
                                          </div>
                                       </div>
                                       <div className=" flex flex-row items-end">
                                          <p className=" opacity-70 text-xs sm:text-sm items-end">
                                             1 hours ago
                                          </p>
                                          <div className=" relative">
                                             <div className="">
                                                {currentUser ===
                                                   item.user._id && (
                                                   <img
                                                      className=" w-[25px] sm:w-[30px] cursor-pointer"
                                                      src={more.src}
                                                      alt=""
                                                      onClick={() =>
                                                         handelshowDeletePost(
                                                            item._id
                                                         )
                                                      }
                                                   />
                                                )}
                                             </div>
                                             {/* delete option */}
                                             {currentUser === item.user._id &&
                                                selectedPostid === item._id && (
                                                   <div
                                                      className={`${
                                                         showDelete
                                                            ? "block"
                                                            : "hidden"
                                                      } absolute top-8 right-0`}
                                                   >
                                                      <div
                                                         className=" px-2 bg-white "
                                                         onClick={() =>
                                                            handelDeletePost(
                                                               item._id
                                                            )
                                                         }
                                                      >
                                                         <p className="text-red-500 cursor-pointer">
                                                            Delete
                                                         </p>
                                                      </div>
                                                   </div>
                                                )}
                                          </div>
                                       </div>
                                    </div>

                                    {/* achievements */}
                                    <div className="flex flex-row my-4 gap-5">
                                       {item.achievements.map(
                                          (item: any, index: any) => (
                                             <div
                                                className={`rounded-md text-xs sm:text-base px-4 sm:px-6 py-1 flex flex-row gap-2 items-center
                        ${
                           item === "Celebration"
                              ? "bg-celebration text-black"
                              : item === "Thoughts"
                              ? "bg-thoughts text-white"
                              : "bg-achievements text-black"
                        }`}
                                                key={index}
                                             >
                                                <p>{item}</p>
                                                <div className="">
                                                   <img
                                                      className=" w-3 sm:w-4 aspect-square object-contain"
                                                      src={
                                                         item === "Celebration"
                                                            ? celebrationImg.src
                                                            : item ===
                                                              "Thoughts"
                                                            ? thoughtImg.src
                                                            : achievementImg.src
                                                      }
                                                      alt="sdfjl"
                                                   />
                                                </div>
                                             </div>
                                          )
                                       )}
                                    </div>

                                    {/* content */}
                                    <div className="mt-3">
                                       <div className="">
                                          <p className=" text-sm sm:text-base">
                                             {item.content}
                                          </p>
                                       </div>
                                    </div>

                                    {/*show likes */}
                                    <div className="">
                                       <div className=" my-5 mx-5">
                                          <p className="opacity-70 text-xs sm:text-sm">
                                             {item.totallikes} Likes
                                          </p>
                                       </div>
                                    </div>
                                 </div>

                                 {/* like and comment section */}
                                 <div className=" bg-gray-100 w-full -mt-7 px-5 py-4">
                                    <div className=" flex flex-col gap-3">
                                       {/* button */}
                                       <div className="">
                                          {item.Likes.includes(currentUser) ? (
                                             <button
                                                className="bg-red-500 w-[25%] sm:w-[20%] lg:w-[10%] text-sm sm:text-base py-2 rounded-md text-white"
                                                onClick={() =>
                                                   handelLike(
                                                      item._id,
                                                      currentUser
                                                   )
                                                }
                                             >
                                                Unlike
                                             </button>
                                          ) : (
                                             <button
                                                className="bg-blue-500 w-[25%] sm:w-[20%] lg:w-[10%] text-sm sm:text-base py-2 rounded-md text-white"
                                                onClick={() =>
                                                   handelLike(
                                                      item._id,
                                                      currentUser
                                                   )
                                                }
                                             >
                                                Like
                                             </button>
                                          )}
                                       </div>

                                       {/*add comment section */}
                                       <div className=" flex flex-row gap-3 sm:gap-5">
                                          <div className=" w-9/12 sm:w-10/12">
                                             <textarea
                                                className="w-full bg-gray-300 place-content-center text-sm sm:text-base px-4 rounded-md resize-none outline-none"
                                                name=""
                                                value={message[item._id]}
                                                id="message"
                                                placeholder="Comment"
                                                onChange={(e) =>
                                                   setMessage({
                                                      ...message,
                                                      [item._id]:
                                                         e.target.value,
                                                   })
                                                }
                                             />
                                          </div>

                                          {/* button to submit comment */}
                                          <div className="w-3/12 sm:w-2/12">
                                             <button
                                                className="w-full border-2 text-xs sm:text-base border-gray-200 bg-white py-[9px] rounded-md"
                                                onClick={() =>
                                                   handelcommentSubmit(
                                                      item._id,
                                                      currentUser
                                                   )
                                                }
                                             >
                                                {isuploading[item._id] ? (
                                                   <div className="">
                                                      <span className="loaderblack"></span>
                                                   </div>
                                                ) : (
                                                   "Comment"
                                                )}
                                             </button>
                                          </div>
                                       </div>

                                       {/* show comments */}
                                       <div className="">
                                          {item.allcomments.length > 0 && (
                                             <div className=" border-2 border-gray-300 rounded-lg p-2 sm:p-4">
                                                <div className=" ">
                                                   <div className=" ">
                                                      {item.allcomments
                                                         .slice(
                                                            0,
                                                            extendedPostId ===
                                                               item._id &&
                                                               showAllcomments
                                                               ? item
                                                                    .allcomments
                                                                    .length
                                                               : initalcomment
                                                         )
                                                         .map((item: any) => (
                                                            <div
                                                               className="flex flex-row gap-3 my-3 sm:my-5"
                                                               key={item._id}
                                                            >
                                                               <div className="">
                                                                  <img
                                                                     className="w-[35px] aspect-square overflow-hidden object-cover rounded-full"
                                                                     src={
                                                                        item
                                                                           .user
                                                                           .avatar
                                                                     }
                                                                     alt=""
                                                                  />
                                                               </div>
                                                               <div className=" border-2 border-gray-300 rounded-md w-full px-2 py-1 pb-5">
                                                                  <p className="font-medium capitalize text-sm sm:text-base">
                                                                     {
                                                                        item
                                                                           .user
                                                                           .userName
                                                                     }
                                                                  </p>
                                                                  <p className="text-xs sm:text-sm opacity-95 w-11/12 ">
                                                                     {
                                                                        item.message
                                                                     }
                                                                  </p>
                                                               </div>
                                                               {/* show delete option */}
                                                               <div className=" relative">
                                                                  {currentUser ===
                                                                     item.user
                                                                        ._id && (
                                                                     <div className="">
                                                                        <img
                                                                           className="w-[30px] aspect-square cursor-pointer"
                                                                           src={
                                                                              more.src
                                                                           }
                                                                           alt=""
                                                                           onClick={() =>
                                                                              handelcommentdeleteshow(
                                                                                 item._id
                                                                              )
                                                                           }
                                                                        />
                                                                     </div>
                                                                  )}
                                                                  {selectedCommentId ===
                                                                     item._id && (
                                                                     <div
                                                                        className={`${
                                                                           showcommentdelete
                                                                              ? "block"
                                                                              : "hidden"
                                                                        } absolute top-8 -right-5`}
                                                                     >
                                                                        <div
                                                                           className=" px-2 "
                                                                           onClick={() =>
                                                                              handelCommentDelete(
                                                                                 item._id
                                                                              )
                                                                           }
                                                                        >
                                                                           <p className="text-red-500 cursor-pointer">
                                                                              Delete
                                                                           </p>
                                                                        </div>
                                                                     </div>
                                                                  )}
                                                               </div>
                                                            </div>
                                                         ))}
                                                   </div>
                                                </div>
                                                {/* //show more less option section */}
                                                {item.allcomments.length >
                                                   1 && (
                                                   <div className="">
                                                      <div className=" flex justify-end">
                                                         <div className=" px-3">
                                                            <button
                                                               onClick={() =>
                                                                  handelShowMoreLess(
                                                                     item._id
                                                                  )
                                                               }
                                                            >
                                                               {extendedPostId ===
                                                               item._id ? (
                                                                  <div className=" flex text-sm sm:text-base gap-3 flex-row items-center opacity-60">
                                                                     <p className=" font-semibold">
                                                                        Less
                                                                     </p>
                                                                     <img
                                                                        className=" w-4 sm:w-5 object-contain"
                                                                        src="/up.png"
                                                                        alt=""
                                                                     />
                                                                  </div>
                                                               ) : (
                                                                  <div className=" text-sm sm:text-base flex gap-3 flex-row items-center opacity-60">
                                                                     <p className=" font-semibold">
                                                                        More
                                                                     </p>
                                                                     <img
                                                                        className=" w-4 sm:w-5 object-contain"
                                                                        src="/down.png"
                                                                        alt=""
                                                                     />
                                                                  </div>
                                                               )}
                                                            </button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                )}
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     ) : (
                        <div className="">
                           <p className="text-2xl text-center">No any post</p>
                        </div>
                     )}
                  </div>
               )}
            </div>
         </div>
      </>
   );
}