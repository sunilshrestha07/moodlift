import dbConnect from "@/lib/db";
import Comment from "@/models/Comment";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        await dbConnect();
        try {
            const comment = await Comment.findByIdAndDelete(id);
            const postid = comment?.post;
            await Post.findByIdAndUpdate(postid, { $pull: { Comments: comment._id } });

            return NextResponse.json({ message: "Comment deleted successfully" }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ message: "Error deleting comment" }, { status: 500 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: `Error connecting to db: ${error.message}` }, { status: 500 });
    }
}