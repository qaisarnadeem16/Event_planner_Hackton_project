// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBKookhB38vOAtYTU8meAl6t-nxQsBhmUY",
  authDomain: "hacktonproject-33690.firebaseapp.com",
  projectId: "hacktonproject-33690",
  storageBucket: "hacktonproject-33690.appspot.com",
  messagingSenderId: "798763405206",
  appId: "1:798763405206:web:c3e9ff69c7929400b497b7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;