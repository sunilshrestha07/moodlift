import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        //PUTTING THE REQUIRED VALUES AT FIRST
        name: {
            type: String,
        },
        gender: {
            type: String,
        },
        age: {
            type: Number,
        },
        pastExperiences: {
            type: String,
        },
        previousDiagnosis: [
            //mental health condition
            {
                type: String,
            },
        ],

        //PUTTING THE OPTIONAL VALUES AFTER REQUIRED VALUES
        goal: {
            type: String,
        },
        phone: {
            type: String,
        },
        image: {
            type: String,
        },
        email: {
            type: String,
        },
        posts: [
            {
                type: String,
            },
        ],
        noOfPosts: {
            type: Number,
        },
        // thingsToKnow: [
        //   {
        //     previousDiagnosis: String,
        //     pastExperiences: Boolean,
        //   },
        // ],
        activityInfo: [
            {
                date: { type: Date, default: Date.now() },
                mood: Number,
                moodDuration: Number,
                stressLevel: Number,
                anxietySymptoms: [{ type: String }],
                sleepQuality: Number,
                sleepHours: Number,
                sleepDisturbance: String,
                energyLevel: Number,
                physicalActivity: String,
                eatingHabit: String,
                socialEnjoyment: Number,
                loneliness: Number,
                currentTreatment: String,
            },
        ],
        accessToken: {
            type: String,
            // required: true,
        },
        refreshToken: {
            type: String,
            // required: true,
        },
        isAuthorized: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
