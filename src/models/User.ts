import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
<<<<<<< HEAD
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
=======
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    pastExperiences: {
      type: Boolean,
    },
    previousDiagnosis: [
      {
        type: String,
      },
    ],
    goal: {
      type: String,
    },
    phone: {
      type: String,
    },
    avatar: {
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
    activityInfo: [
      {
        date: { type: Date, default: Date.now },
        mood: Number,
        moodDuration: Number,
        stressLevel: Number,
        anxietySymptoms: [String],
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
  },
  { timestamps: true }
>>>>>>> d3855b48867e412d2b11a9037da3715df2ef17cb
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
