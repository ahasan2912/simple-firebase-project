// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhrfnfU0-CneI5uYBN3ceFk2hgzNeUL9I",
  authDomain: "simple-firebase-project-c62c0.firebaseapp.com",
  projectId: "simple-firebase-project-c62c0",
  storageBucket: "simple-firebase-project-c62c0.firebasestorage.app",
  messagingSenderId: "86789899181",
  appId: "1:86789899181:web:c4049898bc23d620a5d724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;