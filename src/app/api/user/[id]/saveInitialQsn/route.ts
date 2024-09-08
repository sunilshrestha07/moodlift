import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

//TESTING DONE

export async function POST(req: Request, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
    } catch (error: any) {
        console.error("Error connecting to database:", error.message);
        return NextResponse.json({ message: "Database connection error" }, { status: 500 });
    }

    const userId = params.id;
    if (!userId) {
        return NextResponse.json({ message: "User ID not provided" }, { status: 400 });
    }

    const body = await req.json();
    const data = body.record;

    if (!data) {
        return NextResponse.json({ message: "record data not provided" }, { status: 400 });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Add the new activity
        user.gender = data.gender;
        user.age = data.age;
        user.pastExperiences = data.pastExperiences;
        user.previousDiagnosis = data.previousDiagnosis;

        // Sort the activityInfo array by date
        //   user.activityInfo.sort(
        //       (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
        //   );

        await user.save();
        return NextResponse.json({
            message: "data added successfully",
        });
    } catch (error: any) {
        console.error("Error updating user:", error.message);
        return NextResponse.json({ message: "Error updating user" }, { status: 500 });
    }
}
