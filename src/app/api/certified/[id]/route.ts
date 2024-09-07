import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

// Define the interface for the verification documents
export interface verify {
  fullname: string;
  officialemail: string;
  phone: number;
  address: string;
  licence: string;
  expiryDate: Date;
  province: string;
  licanceImage: string;
  educationImage: string;
  photoId: string;
  workplace: string;
  experience: number;
  specializations: string;
}

// API route to update verification documents
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;  // Destructuring to extract `id` directly
    try {
        await dbConnect();
        const verificationData = await request.json();

        if (!verificationData) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Update the user's verification documents
        user.verificationDocuments = verificationData;

        await user.save();

        return NextResponse.json({ message: "Verification documents updated successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: `Error updating verification documents: ${error.message}` }, { status: 500 });
    }
}
