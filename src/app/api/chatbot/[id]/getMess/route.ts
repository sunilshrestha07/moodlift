import SleepQuality from "@/components/DailySteppper/SleepQuality";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

// TESTING DONE

export interface activityType {
    date: Date;
    mood: Number;
    moodDuration: Number;
    stressLevel: Number;
    anxietySymptoms: String;
    sleepQuality: Number;
    sleepHours: Number;
    sleepDisturbance: String;
    energyLevel: Number;
    physicalActivity: String;
    eatingHabit: String;
    socialEnjoyment: Number;
    loneliness: Number;
    currentTreatment: String;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    // Log the received parameters to debug
    console.log("Request Params:", params);

    try {
        await dbConnect();
    } catch (error: any) {
        console.error("Error connecting to the database:", error.message);
        return NextResponse.json({ message: "Database connection problem" }, { status: 500 });
    }

    const userId = params?.id;
    if (!userId) {
        return NextResponse.json({ message: "User ID not provided" }, { status: 400 });
    }

    try {
        const dbUser = await User.findById(userId);
        if (!dbUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Get the current date and calculate the date 7 days ago
        const currentDate = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 14);

        // Filter activities from the past seven days
        const recentActivities: any = dbUser.activityInfo.filter((activity: activityType) => {
            return new Date(activity.date) >= sevenDaysAgo;
        });

        // Create the messObject with the required fields
        const messObject = recentActivities.map((activity: activityType) => ({
            date: activity.date.toDateString(),
            stressLevel: activity.stressLevel,
            mood: activity.mood,
            energyLevel: activity.energyLevel,
            SleepQuality: activity.sleepQuality,
        }));

        return NextResponse.json({ message: "Data retrieved successfully", messObject });
    } catch (error: any) {
        console.error("Error retrieving user data:", error.message);
        return NextResponse.json({ message: "Error retrieving user data" }, { status: 500 });
    }
}
