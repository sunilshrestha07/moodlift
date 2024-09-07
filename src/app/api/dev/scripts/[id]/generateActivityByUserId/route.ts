import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "@/models/User"; // Adjust the import path as needed
import dbConnect from "@/lib/db";
import { request } from "http";

// Function to generate random activity data
function generateRandomActivity(date:Date) {
  const activities = ["Running", "Yoga", "Meditation", "Swimming", "Cycling"];
  const eatingHabits = ["Balanced", "Vegetarian", "Vegan", "Keto", "Intermittent Fasting"];

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
    sleepDisturbance: faker.helpers.arrayElement(["None", "Mild", "Moderate", "Severe"]),
    energyLevel: faker.number.int({ min: 1, max: 10 }),
    physicalActivity: faker.helpers.arrayElement(activities),
    eatingHabit: faker.helpers.arrayElement(eatingHabits),
    socialEnjoyment: faker.number.int({ min: 1, max: 10 }),
    loneliness: faker.number.int({ min: 1, max: 10 }),
    currentTreatment: faker.helpers.arrayElement(["Therapy", "Medication", "Both", "None"]),
  };
}

export async function PUT(req:NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the user ID from the request (assuming it is passed in the request body)
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Generate activity data for the last 14 days
    const newActivities = [];
    for (let i = 0; i < 14; i++) {
      const date = faker.date.recent({ days: 14 });
      newActivities.push(generateRandomActivity(date));
    }

    // Add the new activities to the user's activityInfo array
    user.activityInfo.push(...newActivities);

    // Save the updated user document
    await user.save();

    // Return success response with the updated activity info
    return NextResponse.json(
      { message: "Activities added successfully", activityInfo: user.activityInfo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating activity info:", error);
    return NextResponse.json(
      { message: "Failed to update activity info" },
      { status: 500 }
    );
  }
}
