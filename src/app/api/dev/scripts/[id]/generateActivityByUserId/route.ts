import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "@/models/User"; // Adjust the import path as needed
import dbConnect from "@/lib/db";

// TESTING DONE


// Function to generate a series of distinct dates (in UTC) for the past n days
function generateDateSeries(days: number): Date[] {
  const dates = [];
  const today = new Date(); // Starting point (current day)

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - i); // Set the date to i days ago
    dates.push(date);
  }

  return dates;
}

// Function to generate random activity data for a given date
function generateRandomActivity(date: Date) {
  const activities = ["Running", "Yoga", "Meditation", "Swimming", "Cycling"];
  const eatingHabits = [
    "Balanced",
    "Vegetarian",
    "Vegan",
    "Keto",
    "Intermittent Fasting",
  ];

  return {
    date: date,
    mood: faker.number.int({ min: 1, max: 10 }),
    moodDuration: faker.number.int({ min: 1, max: 24 }),
    stressLevel: faker.number.int({ min: 1, max: 10 }),
    anxietySymptoms: faker.helpers.arrayElements(
      ["Restlessness", "Fatigue", "Irritability", "Trouble concentrating"],
      { min: 1, max: 3 }
    ),
    sleepQuality: faker.number.int({ min: 1, max: 10 }),
    sleepHours: faker.number.float({ min: 4, max: 12 }),
    sleepDisturbance: faker.helpers.arrayElement([
      "None",
      "Mild",
      "Moderate",
      "Severe",
    ]),
    energyLevel: faker.number.int({ min: 1, max: 10 }),
    physicalActivity: faker.helpers.arrayElement(activities),
    eatingHabit: faker.helpers.arrayElement(eatingHabits),
    socialEnjoyment: faker.number.int({ min: 1, max: 10 }),
    loneliness: faker.number.int({ min: 1, max: 10 }),
    currentTreatment: faker.helpers.arrayElement([
      "Therapy",
      "Medication",
      "Both",
      "None",
    ]),
  };
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const userId = params.id;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { message: "Invalid or missing User ID" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Generate distinct dates for the past 14 days
    const distinctDates = generateDateSeries(14);

    // Filter out dates for which an activity already exists
    const existingDates = user.activityInfo.map((activity:any) =>
      new Date(activity.date).toDateString()
    );

    const newActivities = distinctDates
      .filter((date) => !existingDates.includes(date.toDateString()))
      .map((date) => generateRandomActivity(date));

    // Add and save the activities
    if (newActivities.length > 0) {
      user.activityInfo.push(...newActivities);
      await user.save();
    }

    return NextResponse.json(
      {
        message: "Activities added successfully",
        activityInfo: user.activityInfo,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating activity info:", error);
    return NextResponse.json(
      { message: `Failed to update activity info, error: ${error.message}` },
      { status: 500 }
    );
  }
}
