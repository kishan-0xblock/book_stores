// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvWDUZQsXrNPGZFXn34VtsaNa9z9cH2Zs",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,

  // apiKey: "AIzaSyCvWDUZQsXrNPGZFXn34VtsaNa9z9cH2Zs",
  // authDomain: "book-wala-fbd4e.firebaseapp.com",
  // databaseURL: "https://book-wala-fbd4e-default-rtdb.firebaseio.com",
  // projectId: "book-wala-fbd4e",
  // storageBucket: "book-wala-fbd4e.appspot.com",
  // messagingSenderId: "818841136043",
  // appId: "1:818841136043:web:95d77c1054df9b4aec80ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
