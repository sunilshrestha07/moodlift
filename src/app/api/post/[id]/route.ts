import dbConnect from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    try {
        await dbConnect()
            try {
                const post = await Post.findByIdAndDelete(id)
                if(!post){
                    return NextResponse.json({message:"Error deleting post"},{status:404})
                }

                return NextResponse.json({message:"Post deleted successfully"},{status:200})
            } catch (error :any) {
                return NextResponse.json({message:`Error deleting post ${error.message}`},{status:500})
            }
    } catch (error :any) {
        return NextResponse.json({ message: `Error connecting to the database: ${error.message}` }, { status: 500 })
    }
}

//update post for likes
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const { userId } = await request.json();

    try {
        await dbConnect();
        const post = await Post.findById(id);

        if (!post) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        if (post.Likes.includes(userId)) {
            // Unlike the post
            await Post.updateOne(
                { _id: id },
                { $pull: { Likes: userId } }
            );
            return NextResponse.json({ message: "Post unliked successfully" }, { status: 200 });
        } else {
            // Like the post
            await Post.updateOne(
                { _id: id },
                { $addToSet: { Likes: userId } }
            );
            return NextResponse.json({ message: "Post liked successfully" }, { status: 200 });
        }
    } catch (error: any) {
        console.error("Error in PUT /api/posts/[id]:", error);
        return NextResponse.json({ message: `Error: ${error.message}` }, { status: 500 });
    }
}