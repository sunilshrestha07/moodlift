import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await dbConnect()
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to the database" }, { status: 500 })
    }
}