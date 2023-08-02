// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjSzYWCdbxwgJeMHnvNMGs8puX9riTrQg",
  authDomain: "react-app-e696a.firebaseapp.com",
  projectId: "react-app-e696a",
  storageBucket: "react-app-e696a.appspot.com",
  messagingSenderId: "1006845645677",
  appId: "1:1006845645677:web:d2315edd8da8c47e034064",
  measurementId: "G-GQLSXB0QVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);