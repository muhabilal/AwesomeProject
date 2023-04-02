// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkoA1D7jaUlY5BgZgUK6Ie8HkeJHAIGjc",
    authDomain: "suite-setup.firebaseapp.com",
    projectId: "suite-setup",
    storageBucket: "suite-setup.appspot.com",
    messagingSenderId: "149561122670",
    appId: "1:149561122670:web:53968ad6bb5dfc072feb7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };