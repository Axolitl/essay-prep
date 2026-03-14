import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJx9H-jcpw-oxAxCO0SmVsfWkHPZAH8fo",
  authDomain: "essay-prep.firebaseapp.com",
  projectId: "essay-prep",
  storageBucket: "essay-prep.firebasestorage.app",
  messagingSenderId: "865837357868",
  appId: "1:865837357868:web:ca4b588dc140615d3c6a89",
  measurementId: "G-0DX3Z8728E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   // <-- export Firestore
export const analytics = getAnalytics(app);