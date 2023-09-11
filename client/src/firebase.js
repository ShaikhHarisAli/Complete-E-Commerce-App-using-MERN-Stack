import * as firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC56xRsMAkiSReyOjZOC5FxMMSu7qtnwQ8",
  authDomain: "ecommerce-a49bf.firebaseapp.com",
  projectId: "ecommerce-a49bf",
  storageBucket: "ecommerce-a49bf.appspot.com",
  messagingSenderId: "1079734838262",
  appId: "1:1079734838262:web:c3b85b78a13f6f9c369dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()