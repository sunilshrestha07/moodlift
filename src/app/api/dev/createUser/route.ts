import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log("Hello is this working");
        await dbConnect();
        try {
            const user = await req.json();
            const newUser = new User(user);
            await newUser.save();

            return NextResponse.json({ message: "Dummy user created successfully" }, { status: 200 });
        } catch (error) {
            console.error("Error creating user:", error);
            return NextResponse.json({ message: "Dummy user creation problem" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return NextResponse.json({ message: "Database connection problem" }, { status: 500 });
    }
}
