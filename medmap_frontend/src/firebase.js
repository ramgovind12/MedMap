<<<<<<< Updated upstream
// Import the functions you need from the SDKs you need
=======
>>>>>>> Stashed changes
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn5bV48GnYT4VI5qtu4lznOD0zZeYa-OI",
  authDomain: "medmap-d41f6.firebaseapp.com",
  projectId: "medmap-d41f6",
  storageBucket: "medmap-d41f6.appspot.com",
  messagingSenderId: "247138859572",
  appId: "1:247138859572:web:0fd6d9f80336c32b23e861",
  measurementId: "G-4L12FV8LM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);