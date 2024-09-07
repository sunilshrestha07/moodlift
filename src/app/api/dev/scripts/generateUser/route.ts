import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "@/models/User"; // Adjust the import path as needed
import dbConnect from "@/lib/db";

// TESTING DONE

// Function to generate random data using Faker
function generateRandomUser() {
  const genders = ["Male", "Female", "Other", "Prefer not to say"];
  const diagnoses = [
    "Depression",
    "Anxiety",
    "PTSD",
    "OCD",
    "Bipolar Disorder",
  ];
  const activities = ["Running", "Yoga", "Meditation", "Swimming", "Cycling"];
  const eatingHabits = [
    "Balanced",
    "Vegetarian",
    "Vegan",
    "Keto",
    "Intermittent Fasting",
  ];

  return {
    name: faker.person.fullName(),
    gender: faker.helpers.arrayElement(genders),
    age: faker.number.int({ min: 18, max: 100 }),
    pastExperiences: faker.datatype.boolean(),
    previousDiagnosis: [faker.helpers.arrayElement(diagnoses)],
    goal: faker.lorem.sentence(),
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    noOfPosts: "0",
    // noOfPosts: faker.number.int({ min: 0, max: 100 }),
    // activityInfo: [
    //   {
    //     date: faker.date.recent(),
    //     mood: faker.number.int({ min: 1, max: 10 }),
    //     moodDuration: faker.number.int({ min: 1, max: 24 }),
    //     stressLevel: faker.number.int({ min: 1, max: 10 }),
    //     anxietySymptoms: faker.helpers.arrayElements(
    //       ["Restlessness", "Fatigue", "Irritability", "Trouble concentrating"],
    //       { min: 1, max: 3 }
    //     ),
    //     sleepQuality: faker.number.int({ min: 1, max: 10 }),
    //     sleepHours: faker.number.float({ min: 4, max: 12 }),
    //     // sleepHours: faker.number.float({ min: 4, max: 12, precision: 0.1 }),
    //     sleepDisturbance: faker.helpers.arrayElement([
    //       "None",
    //       "Mild",
    //       "Moderate",
    //       "Severe",
    //     ]),
    //     energyLevel: faker.number.int({ min: 1, max: 10 }),
    //     physicalActivity: faker.helpers.arrayElement(activities),
    //     eatingHabit: faker.helpers.arrayElement(eatingHabits),
    //     socialEnjoyment: faker.number.int({ min: 1, max: 10 }),
    //     loneliness: faker.number.int({ min: 1, max: 10 }),
    //     currentTreatment: faker.helpers.arrayElement([
    //       "Therapy",
    //       "Medication",
    //       "Therapy and",
    //       "None",
    //     ]),
    //   },
    // ],
  };
}

export async function GET() {
  await dbConnect();
  try {
    // Generate random user data
    const randomUserData = generateRandomUser();

    // Create a new User instance with the random data
    const newUser = new User(randomUserData);

    // Validate the user data against the schema
    await newUser.validate();
    await newUser.save();

    // Return the generated user data as a response
    return NextResponse.json(
      { randomUserData, message: "user created" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error generating random user:", error);
    return NextResponse.json(
      { error: `Failed to generate random user ${error.message}` },
      { status: 500 }
    );
  }
}
