// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPzHn3zeBONSr4WNjgjrU9-rnlhgFZVn8",
  authDomain: "netflixgbt-60b30.firebaseapp.com",
  projectId: "netflixgbt-60b30",
  storageBucket: "netflixgbt-60b30.appspot.com",
  messagingSenderId: "626214620219",
  appId: "1:626214620219:web:5227e895abf44ac82b601e",
  measurementId: "G-NQX3ECB9JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth correctly
export const auth = getAuth(app);
