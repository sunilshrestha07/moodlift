import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

//TESTING DONE

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
    } catch (error) {
        console.error("Error connecting to database", error);
        return NextResponse.json({ message: "DB connection error" }, { status: 500 });
    }
    //displaying received parameters
    // console.log("Received params:", params);

    const userId = params.id;
    if (!userId) {
        return NextResponse.json({ message: "userId not provided" }, { status: 400 });
    }

    // console.log("Attempting to find user with ID:", userId);

    const user = await User.findById(userId);
    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
}
