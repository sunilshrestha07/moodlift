import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
        date: { type: Date, default: Date.now() },
        mood: Number,
        moodDuration: Number,
        stressLevel: Number,
        anxietySymptoms: [{type:String}],
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
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
