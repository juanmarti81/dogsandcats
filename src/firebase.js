// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabr6RCuuSCkNwkfuqHFZi6B0U3zLSs5U",
  authDomain: "dogsandcats-ab791.firebaseapp.com",
  projectId: "dogsandcats-ab791",
  storageBucket: "dogsandcats-ab791.appspot.com",
  messagingSenderId: "161870108304",
  appId: "1:161870108304:web:2e75f8b93949008f08ea15",
  measurementId: "G-GHVP8E0GL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
