// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGj1Wt-QmKGxuW9ZRJxq2BLT8RAFktOqQ",
  authDomain: "netflixgpt-2cfb0.firebaseapp.com",
  projectId: "netflixgpt-2cfb0",
  storageBucket: "netflixgpt-2cfb0.firebasestorage.app",
  messagingSenderId: "350701898541",
  appId: "1:350701898541:web:168bf2503472f4e553a1a4",
  measurementId: "G-FDKQ9KNS87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();