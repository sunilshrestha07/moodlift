import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

// TESTING DONE

export async function PUT(req:NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return NextResponse.json({ message: "Database connection problem" }, { status: 500 });
    }
    
    const receivedUserId = params.id;
    if (!receivedUserId) {
        return NextResponse.json({ message: "userId not provided" }, { status: 400 });
    }

    const receivedUserObject = await req.json();

    if (!receivedUserObject) {
        return NextResponse.json({ message: "User object not provided" }, { status: 400 });
    }

    const databaseUserObject = await User.findByIdAndUpdate(
        receivedUserId,
        receivedUserObject,
        { new: true, runValidators: true }
      );
      if (!databaseUserObject) {
        return NextResponse.json({message: "User not found"}, {
          status: 404,
        });
      }
      return NextResponse.json({message: "User saved successfully"}, {
        status: 200,
      });
    
}