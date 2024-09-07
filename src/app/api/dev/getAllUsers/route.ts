import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return NextResponse.json(
      { message: "Database connection problem" },
      { status: 500 }
    );
  }

  const user = await User.find();

  if (user.length === 0) {
    return NextResponse.json(
      { message: "No user found, try creating a user first" },
      { status: 404 }
    );
  }

  return NextResponse.json({user, message: "Users found" }, { status: 200 });
}
