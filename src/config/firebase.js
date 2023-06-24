// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn3Gb6q0drojPboA9jhje17_wkDUSO-yg",
  authDomain: "information-oasis.firebaseapp.com",
  projectId: "information-oasis",
  storageBucket: "information-oasis.appspot.com",
  messagingSenderId: "1040949849350",
  appId: "1:1040949849350:web:9412715fe4380421350287",
  measurementId: "G-7TSZFQCX62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
