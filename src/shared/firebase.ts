import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsdK09JT-t0VTcblTz_GT8d1KsTgvu4Xk",
  authDomain: "tchat-2b86e.firebaseapp.com",
  projectId: "tchat-2b86e",
  storageBucket: "tchat-2b86e.appspot.com",
  messagingSenderId: "330605601914",
  appId: "1:330605601914:web:1895e409dd5722dac5c7c3",
  measurementId: "G-FE0H3P2GKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
