// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcHj7uqMQPSL875s0M9ZHNXt1t0RXlRhA",
  authDomain: "winniesoft-11ebb.firebaseapp.com",
  projectId: "winniesoft-11ebb",
  storageBucket: "winniesoft-11ebb.appspot.com",
  messagingSenderId: "138060003880",
  appId: "1:138060003880:web:93a84a369996740c2c531d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
