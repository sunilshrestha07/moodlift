import dbConnect from "@/lib/db";
import Comment from "@/models/Comment";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

//create new comment
export async function POST(request: Request) {
    try {
        const { user, message, post } = await request.json();
        await dbConnect();

        try {
            const newcomment = new Comment({
                user,
                message,
                post
            });
            await newcomment.save();
            await Post.findByIdAndUpdate(post, { $push: { Comments: newcomment._id } });

            return NextResponse.json({ newcomment: newcomment }, { status: 200 });
        } catch (error: any) {
            return NextResponse.json({ message: `Error posting comments: ${error.message}` }, { status: 500 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: `Error connecting to db: ${error.message}` }, { status: 500 });
    }
}

//fetching the comments
export async function GET(request: Request) {
    try {
        await dbConnect()
            try {
                const comments = await Comment.find();
                if(!comments){
                    return NextResponse.json({ message: "No comments found" }, { status: 404 });
                }

                return NextResponse.json({ comments: comments }, { status: 200 });
            } catch (error:any) {
                return NextResponse.json({ message: `Error fetching comments: ${error.message}` }, { status: 500 });
            }
    } catch (error :any) {
        return NextResponse.json({ message: `Error connecting to the database ${error.message}` }, { status: 500 });
    }
}