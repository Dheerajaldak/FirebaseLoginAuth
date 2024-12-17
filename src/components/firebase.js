// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuYmKSbkwHxIksk5oXi3rkb3RLG_AeT44",
  authDomain: "login-auth-ff637.firebaseapp.com",
  databaseURL: "https://login-auth-ff637-default-rtdb.firebaseio.com",
  projectId: "login-auth-ff637",
  storageBucket: "login-auth-ff637.firebasestorage.app",
  messagingSenderId: "495167644851",
  appId: "1:495167644851:web:2ea7b56d4c53be1c477cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;