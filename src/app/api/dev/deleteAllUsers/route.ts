import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

// TESTING DONE

export async function DELETE() {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Error connecting to database");
    return NextResponse.json(
      { message: "Error connecting to database" },
      { status: 500 }
    );
  }

  // Delete all users
  const deleteResult = await User.deleteMany({});

  if (deleteResult.deletedCount === 0) {
    return NextResponse.json(
      { message: "No users to delete, try creating users first" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: `Successfully deleted ${deleteResult.deletedCount} user(s)` },
    { status: 200 }
  );
}
