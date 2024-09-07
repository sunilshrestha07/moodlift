import { DailyQuestionsState } from "../../../redux/features/dailyQuestionsSlice";

export const getAllQuestionsData = (state: DailyQuestionsState) => {
    // console.log("State passed to getAllQuestionsData:", state);

    return {
        mood: state.mood,
        moodDuration: state.moodDuration,
        stressLevel: state.stressLevel,
        sleepQuality: state.sleepQuality,
        sleepHours: state.sleepHours,
        anxietySymptoms: state.anxietySymptoms,
        sleepDisturbance: state.sleepDisturbance,
        physicalActivity: state.physicalActivity,
        energyLevels: state.energyLevels,
        eatingHabits: state.eatingHabits,
        socialEngagement: state.socialEngagement,
        loneliness: state.loneliness,
        currentTreatment: state.currentTreatment,
    };
};
