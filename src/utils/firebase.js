// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMnjBPixxhbEHGD7XosyJCPVHiZktHIdI",
  authDomain: "netflixgpt-268ee.firebaseapp.com",
  projectId: "netflixgpt-268ee",
  storageBucket: "netflixgpt-268ee.firebasestorage.app",
  messagingSenderId: "363131513340",
  appId: "1:363131513340:web:98727c461249e2c55c2a79",
  measurementId: "G-7CW5NMFJL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();