// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUBgznfpvsrx88X7jJPXcs1xTNSz06noc",
  authDomain: "react-facebook-b71b8.firebaseapp.com",
  projectId: "react-facebook-b71b8",
  storageBucket: "react-facebook-b71b8.appspot.com",
  messagingSenderId: "227332635172",
  appId: "1:227332635172:web:1845efa16ba4f82e3076b1",
  measurementId: "G-NR7LB5BHGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;