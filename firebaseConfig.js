import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Импорт на Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDSl0vvxP9I3YPnxXrdIqKnYLMRkZpcAKY",
    authDomain: "portfolio-a4676.firebaseapp.com",
    projectId: "portfolio-a4676",
    storageBucket: "portfolio-a4676.appspot.com",
    messagingSenderId: "832352487830",
    appId: "1:832352487830:web:e4bf71174993733dce35b7",
    measurementId: "G-ZRK56V67CH"
};

// Инициализация на Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Инициализация на Firestore

export { db }; // Износ на Firestore инстанция
