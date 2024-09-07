import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const userId = params.id
    try {
        await dbConnect()
            try {
                const user = await User.findByIdAndDelete(userId)
                if(!user){
                    return NextResponse.json({message:"could not found user"},{status:404})
                }

                return NextResponse.json({message:"User deleted successfully"},{status:200})
            } catch (error :any) {
                return NextResponse.json({message:`Error deleting user ${error.message}`},{status:500})
            }
    } catch (error :any) {
        return NextResponse.json({ message: `Error connecting to the database: ${error.message}` }, { status: 500 })
    }
}