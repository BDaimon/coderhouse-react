// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHZxXlg7aSRZzPCbQ8vwH8iYFL6Uv9JmY",
  authDomain: "mi-proyecto-b6052.firebaseapp.com",
  projectId: "mi-proyecto-b6052",
  storageBucket: "mi-proyecto-b6052.appspot.com",
  messagingSenderId: "483905582936",
  appId: "1:483905582936:web:8f25b81764565aa3ea972d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos

export  const db = getFirestore (app);