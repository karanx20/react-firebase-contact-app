// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkJe6b6MAVfolW0deInGbgQpwLJ6PmJY8",
  authDomain: "vite-contact-7e8e4.firebaseapp.com",
  projectId: "vite-contact-7e8e4",
  storageBucket: "vite-contact-7e8e4.firebasestorage.app",
  messagingSenderId: "791635485021",
  appId: "1:791635485021:web:487a475305bb481c2cc8b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);