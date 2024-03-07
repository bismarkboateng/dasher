import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCvLUjNaADfOyqh3k5SV5d4VqeoVxyNEvM",
  authDomain: "dasher-1cf02.firebaseapp.com",
  projectId: "dasher-1cf02",
  storageBucket: "dasher-1cf02.appspot.com",
  messagingSenderId: "74570450120",
  appId: "1:74570450120:web:22b223c94e3ced238091fd",
  measurementId: "G-0HGMQW3K8X"

  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)