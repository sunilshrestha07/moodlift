import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function DELETE({params}:{params:{id:string}}) {
    try {
        await dbConnect();
        
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return NextResponse.json({ message: "Database connection problem" }, { status: 500 });
    }

    const userId = params.id;

    try {
        const user = await User.findByIdAndDelete(userId);
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ message: "User deletion problem" }, { status: 500 });
    }

    
}