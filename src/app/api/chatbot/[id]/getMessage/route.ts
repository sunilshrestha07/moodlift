import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

// TESTING DONE

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        // Connect to the database
        await dbConnect();

        const userId = params.id;

        // Validate input
        if (!userId) {
            return NextResponse.json({ message: "UserId not provided" }, { status: 400 });
        }

        // Find the user by ID
        const user = await User.findById(userId).select("chatbotMessage");
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Return the chatbot messages
        return NextResponse.json(
            {
                chatbotMessage: user.chatbotMessage,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error in GET method:", error);
        return NextResponse.json(
            { message: "Server error", details: error.message },
            { status: 500 }
        );
    }
}
