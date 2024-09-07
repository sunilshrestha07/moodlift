import dbConnect from "@/lib/db";
import Comment from "@/models/Comment";
import Post from "@/models/Post";
import User from "@/models/User";
import { NextResponse } from "next/server";

//create new post
export async function POST(request: Request) {
    try {
        await dbConnect();
        const {owner,content} = await request.json();
        if(!owner || !content){
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        const newPost = new Post({
            owner,
            content
        });
        await newPost.save();
        return NextResponse.json({ message: "Post created successfully", post: newPost }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating post" }, { status: 500 });
    }
}



//fetching the posts
export async function GET(request: Request) {
   try {
      await dbConnect();

      try {
         // Fetch all posts
         const posts = await Post.find();

         // Fetch the user and comments for each post
         const postsWithDetails = await Promise.all(
            posts.map(async (post) => {
               //fetch likes count
               const likesCount = (post.Likes || []).length;

               // Fetch the owner details
               const user = await User.findById(post.owner?._id);
               const { email, password, ...userWithoutSensitiveData } =
                  user?.toObject() || {};

               // Fetch the comments for this post along with user details for each comment
               const commentsWithUserDetails = await Promise.all(
                  post.Comments.map(async (commentId: string) => {
                     const comment = await Comment.findById(commentId);
                     if (comment) {
                        const commentUser = await User.findById(comment.user);
                        const {
                           email,
                           password,
                           ...commentUserWithoutSensitiveData
                        } = commentUser?.toObject() || {};

                        return {
                           ...comment.toObject(),
                           user: commentUserWithoutSensitiveData,
                        };
                     }
                     return null;
                  })
               );

               // Return the post with the owner and enriched comments
               return {
                  ...post.toObject(),
                  user: userWithoutSensitiveData,
                  allcomments: commentsWithUserDetails.filter(Boolean),
                  totallikes: likesCount,
               };
            })
         );

         return NextResponse.json({ posts: postsWithDetails }, { status: 200 });
      } catch (error: any) {
         return NextResponse.json({
            message: `Error getting posts: ${error.message}`,
         });
      }
   } catch (error: any) {
      return NextResponse.json({
         message: `Error connecting to db: ${error.message}`,
      });
   }
}