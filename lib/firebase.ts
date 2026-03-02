import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjpY_9_-C5_8ShIj4gwkgVcYwzf2wbDgU",
  authDomain: "tokko-society.firebaseapp.com",
  projectId: "tokko-society",
  storageBucket: "tokko-society.firebasestorage.app",
  messagingSenderId: "842132813928",
  appId: "1:842132813928:web:6c9bae746e795f10cb63dd",
  measurementId: "G-ZKFB1EMF9J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);