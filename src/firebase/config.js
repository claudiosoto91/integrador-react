// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ1CW_PYiC_RQaaPl4Pm0nNlwWEi2clbI",
  authDomain: "vivero-75698.firebaseapp.com",
  projectId: "vivero-75698",
  storageBucket: "vivero-75698.appspot.com",
  messagingSenderId: "430192470931",
  appId: "1:430192470931:web:a19c9ec3f81edb8e90d666"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth(initializeApp(firebaseConfig));
export {auth};