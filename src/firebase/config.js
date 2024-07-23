// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzBG6d2sNyBhP77iCn9MKbt3hzF7kDh5o",
  authDomain: "journal-app-9c000.firebaseapp.com",
  projectId: "journal-app-9c000",
  storageBucket: "journal-app-9c000.appspot.com",
  messagingSenderId: "1006381457464",
  appId: "1:1006381457464:web:e34976fe7d24dca5c806cd",
  measurementId: "G-EHBF3JMVBP"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);