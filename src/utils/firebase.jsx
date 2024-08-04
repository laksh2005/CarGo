// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2gS27dsfFbrKg8o-7TwXCC6VdYNTGG88",
  authDomain: "cargo-f2575.firebaseapp.com",
  databaseURL: "https://cargo-f2575-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cargo-f2575",
  storageBucket: "cargo-f2575.appspot.com",
  messagingSenderId: "706189063003",
  appId: "1:706189063003:web:ac0686cdfd64ffa318607e",
  measurementId: "G-M899GH2GTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();