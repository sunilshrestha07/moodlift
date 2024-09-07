import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBlmLs97XIKXjiDtnWH9RghIZYme-cllnM",
    authDomain: "moodlift-e9d87.firebaseapp.com",
    projectId: "moodlift-e9d87",
    storageBucket: "moodlift-e9d87.appspot.com",
    messagingSenderId: "566318064064",
    appId: "1:566318064064:web:64db65191fdfc808f46825",
    measurementId: "G-VMLYWCYKZ8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

