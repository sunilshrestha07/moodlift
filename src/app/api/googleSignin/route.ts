import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, avatar, name } = await request.json();
    try {
        await dbConnect();
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                return NextResponse.json({ user: user }, { status: 200 });
            }

            const newuser = new User({
                email,
                avatar,
                name,
            });

            await newuser.save();
            return NextResponse.json(
                { message: "user created successfully", user: newuser },
                { status: 200 }
            );
        } catch (error) {
            return NextResponse.json({ message: "Error creating user" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to db" }, { status: 500 });
    }
}
