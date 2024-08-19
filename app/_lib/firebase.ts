import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA26iKUZX0wP3F-tPLitigYd_nxGp172d4",
  authDomain: "planet-mindful.firebaseapp.com",
  projectId: "planet-mindful",
  storageBucket: "planet-mindful.appspot.com",
  messagingSenderId: "818529810301",
  appId: "1:818529810301:web:bdb31799cc308723143e14",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
