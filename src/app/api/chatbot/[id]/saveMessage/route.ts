import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

// TESTING DONE

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const userId = params.id;
    const { newMessage } = await req.json(); // Changed from 'message' to 'newMessage'

    // Validate input
    if (!userId || !newMessage) {
      return NextResponse.json(
        { message: "UserId or newMessage not provided" },
        { status: 400 }
      );
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Add the new message in a FIFO manner (maintaining only last 5 messages)
    if (user.chatbotMessage.length >= 5) {
      user.chatbotMessage.shift(); // Remove the oldest message
    }
    user.chatbotMessage.push(newMessage); // Add the new message

    // Save the updated user document
    await user.save();

    return NextResponse.json(
      {
        message: "Message added successfully",
        chatbotMessages: user.chatbotMessage,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in POST method:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
