// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSkaih5fZOh0Uf70p-qIESBei5I2jHyP4",
  authDomain: "fir-demo-eed26.firebaseapp.com",
  projectId: "fir-demo-eed26",
  storageBucket: "fir-demo-eed26.appspot.com",
  messagingSenderId: "627191122200",
  appId: "1:627191122200:web:85df70623283c2e64df66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();

export { Auth, Provider };