// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ttQbX4LNr8pwm5l0DnFG3gppxheNrq4",
  authDomain: "react-real-estate-auth.firebaseapp.com",
  projectId: "react-real-estate-auth",
  storageBucket: "react-real-estate-auth.appspot.com",
  messagingSenderId: "904731810582",
  appId: "1:904731810582:web:f86f374c4778e7205ace37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;