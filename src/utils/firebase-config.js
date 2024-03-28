import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJATC035szr9s2_bsLmq6GYb3eVV-IWXI",
  authDomain: "react-netflixx-dab34.firebaseapp.com",
  projectId: "react-netflixx-dab34",
  storageBucket: "react-netflixx-dab34.appspot.com",
  messagingSenderId: "478070353381",
  appId: "1:478070353381:web:49cb9ad3022f69a124130c",
  measurementId: "G-ZCZQN4W49B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);