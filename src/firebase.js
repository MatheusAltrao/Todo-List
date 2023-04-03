// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzMVoqrKZdMjWYf41JhiGPYBwBKyA3Ec",
  authDomain: "todo-db18f.firebaseapp.com",
  projectId: "todo-db18f",
  storageBucket: "todo-db18f.appspot.com",
  messagingSenderId: "98759819710",
  appId: "1:98759819710:web:d62363d0880c82c2fe39ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)