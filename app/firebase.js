import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6r5DPRxWkfKERvW91qi_5Y2PBSUU_Vzc",
  authDomain: "expense-tracker-31dcd.firebaseapp.com",
  projectId: "expense-tracker-31dcd",
  storageBucket: "expense-tracker-31dcd.appspot.com",
  messagingSenderId: "653051585949",
  appId: "1:653051585949:web:5e62c63abaf5f1cc5b7b74",
  measurementId: "G-S9N9743517"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
