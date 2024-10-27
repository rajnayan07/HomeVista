// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homevista1-45a85.firebaseapp.com",
  projectId: "homevista1-45a85",
  storageBucket: "homevista1-45a85.appspot.com",
  messagingSenderId: "1043662371982",
  appId: "1:1043662371982:web:d40746bfddc994dfcb9ddf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);