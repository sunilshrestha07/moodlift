import { NextRequest, NextResponse } from "next/server";

import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import dbConnect from "@/lib/db";
import User from "@/models/User";

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

export const POST = async (req: NextRequest) => {
    try {
        console.log("connecting to db...");
        await dbConnect();
        console.log("connected to db");
        //   console.log({ resFromDb: resFromDb });

        try {
            const body = await req.json();
            // console.log({ userFromGoogleSignin: body });

            // const accessToken = generateAccessToken(body.name, body.email);
            // const refreshToken = generateRefreshToken(body.name, body.email);

            // const newUser = new User({
            //     name: body.name,
            //     gender: " ",
            //     age: 0,
            //     pastExperiences: "",
            //     previousDiagnosis: [],
            //     goal: " ",
            //     image: body.image,
            //     email: body.image,
            //     phone: 0,
            //     posts: [" "],
            //     noOfPosts: 0,
            //     activityInfo: [
            //         {
            //             date: Date.now(),
            //             mood: 0,
            //             moodDuration: 0,
            //             stressLevel: 0,
            //             anxietySymptoms: [" "],
            //             sleepQuality: 0,
            //             sleepHours: 0,
            //             sleepDisturbance: " ",
            //             energyLevel: 0,
            //             physicalActivity: " ",
            //             eatingHabit: " ",
            //             socialEnjoyment: 0,
            //             loneliness: 0,
            //             currentTreatment: " ",
            //         },
            //     ],
            //     accessToken: accessToken,
            //     refreshToken: refreshToken,
            //     isAuthorized: true,
            // });
            // await newUser.save();
            // console.log("user created or logged in");

            // return NextResponse.json({ message: "user created" }, { status: 200 });

            const user = await User.findOne({ email: body.email });

            console.log({ user: user });

            if (user) {
                const userDataToSendToClient = {
                    name: user.name,
                    email: user.email,
                    gender: user.gender,
                    image: user.image,
                    pastExperiences: user.pastExperiences,
                    goal: user.goal,
                    //   posts: user.posts,
                    //   noOfPosts: user.noOfPosts,
                    previousDiagnosis: user.previousDiagnosis,
                    activityInfo: user.activityInfo,
                    isAuthorized: true,
                };

                const accessToken = generateAccessToken(body.name, body.email);
                const refreshToken = generateRefreshToken(body.name, body.email);

                await User.findOneAndUpdate(
                    { email: body.email },
                    { $set: { accessToken: accessToken, refreshToken: refreshToken } }
                );

                const serialized = serialize("moodliftjwt", accessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    //   secure:
                    //       process.env.NODE_ENV === "production" ||
                    //       process.env.USE_SECURE_COOKIES === "true",
                    path: "/",
                });

                const response = NextResponse.json(
                    {
                        message: "Authenticated!",
                        userData: userDataToSendToClient,
                    },
                    { status: 200 }
                );
                response.headers.set("Set-Cookie", serialized);
                return response;
            } else {
                // Create User and send the response
                const accessToken = generateAccessToken(body.name, body.email);
                const refreshToken = generateRefreshToken(body.name, body.email);

                const newUser = new User({
                    name: body.name,
                    gender: " ",
                    age: 0,
                    pastExperiences: "",
                    previousDiagnosis: [],
                    goal: " ",
                    image: body.image,
                    email: body.image,
                    phone: 0,
                    posts: [" "],
                    noOfPosts: 0,
                    activityInfo: [
                        {
                            date: Date.now(),
                            mood: 0,
                            moodDuration: 0,
                            stressLevel: 0,
                            anxietySymptoms: [" "],
                            sleepQuality: 0,
                            sleepHours: 0,
                            sleepDisturbance: " ",
                            energyLevel: 0,
                            physicalActivity: " ",
                            eatingHabit: " ",
                            socialEnjoyment: 0,
                            loneliness: 0,
                            currentTreatment: " ",
                        },
                    ],
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    isAuthorized: true,
                });
                await newUser.save();

                const userCreated = await User.findOne({ email: body.email });

                const userDataToSendToClient = {
                    name: userCreated.name,
                    email: userCreated.email,
                    gender: userCreated.gender,
                    image: userCreated.image,
                    pastExperiences: userCreated.pastExperiences,
                    goal: userCreated.goal,
                    //   posts: userCreated.posts,
                    //   noOfPosts: userCreated.noOfPosts,
                    previousDiagnosis: userCreated.previousDiagnosis,
                    activityInfo: userCreated.activityInfo,
                    isAuthorized: true,
                };
                const serialized = serialize("moodliftjwt", accessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                });

                const response = NextResponse.json(
                    {
                        message: "Authenticated!",
                        userData: userDataToSendToClient,
                    },
                    { status: 200 }
                );
                response.headers.set("Set-Cookie", serialized);
                return response;
            }
        } catch (error: any) {
            return NextResponse.json({ message: `something went wrong ${error}` }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Trouble connecting to db" }, { status: 500 });
    }
};

const generateAccessToken = (name: string, email: string) => {
    return sign({ name: name, email: email }, accessTokenSecret, {});
};

const generateRefreshToken = (name: string, email: string) => {
    return sign({ name: name, email: email }, refreshTokenSecret, {});
};
