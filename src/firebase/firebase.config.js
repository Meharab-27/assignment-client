// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs8MChkn-6ezeAm-KMFJ4M0NX0py4A6x4",
  authDomain: "assignment-client-e495c.firebaseapp.com",
  projectId: "assignment-client-e495c",
  storageBucket: "assignment-client-e495c.appspot.com",
  messagingSenderId: "163149155489",
  appId: "1:163149155489:web:f6559f78ae82f8155134e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

