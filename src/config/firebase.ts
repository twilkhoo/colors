// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgEyXWWljGFsGtm8y7iDJnEFAywEb_iQ",
  authDomain: "colors-297e5.firebaseapp.com",
  projectId: "colors-297e5",
  storageBucket: "colors-297e5.appspot.com",
  messagingSenderId: "49624197829",
  appId: "1:49624197829:web:8327460ed10d4a19515eac",
  measurementId: "G-C5MRC5DSMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
