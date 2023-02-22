// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAwFLBZT6UWMvy7jdV2nSrD4hU0widBpg",
  authDomain: "filmeverse-64861.firebaseapp.com",
  projectId: "filmeverse-64861",
  storageBucket: "filmeverse-64861.appspot.com",
  messagingSenderId: "880883604837",
  appId: "1:880883604837:web:a18f298c9aa79ba9fa558c",
  measurementId: "G-QRZBV09GX6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app); 
export const moviesref=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");
export default app;