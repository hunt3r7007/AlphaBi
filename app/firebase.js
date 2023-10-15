// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkvkktQJ-ERv-QTmIb67SybrcfJateo2M",
  authDomain: "authentication-1f253.firebaseapp.com",
  projectId: "authentication-1f253",
  storageBucket: "authentication-1f253.appspot.com",
  messagingSenderId: "1065311510999",
  appId: "1:1065311510999:web:055c2a317633c787dcab92",
  measurementId: "G-GZYGCJWW4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
