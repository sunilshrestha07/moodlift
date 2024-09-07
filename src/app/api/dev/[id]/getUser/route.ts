import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    await dbConnect();

    // Log the params to see what we're receiving
    console.log("Received params:", params);

    const userId = params.userid;
    if (!userId) {
      return NextResponse.json(
        { message: "userId not provided" },
        { status: 400 }
      );
    }

    console.log("Attempting to find user with ID:", userId);

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/[userId]/getUser:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}