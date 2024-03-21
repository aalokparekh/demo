// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6k4xrvdrGV0jjCC0HODY0uPVilimGYw",
  authDomain: "database-b0c42.firebaseapp.com",
  projectId: "database-b0c42",
  storageBucket: "database-b0c42.appspot.com",
  messagingSenderId: "1015397910038",
  appId: "1:1015397910038:web:21f1cae68310607eabd737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

