// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YeFSPUuq6ZVyTgtgvDvnYj2W8EaLWp0",
  authDomain: "first-project-1266e.firebaseapp.com",
  projectId: "first-project-1266e",
  storageBucket: "first-project-1266e.appspot.com",
  messagingSenderId: "403201560554",
  appId: "1:403201560554:web:fe8360fc90bb7dd3a12c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;