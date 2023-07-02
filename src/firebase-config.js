import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB63ItbHjTxflmnd13ocRqoKnqGWprW6YE",
  authDomain: "easylogin-a1a37.firebaseapp.com",
  projectId: "easylogin-a1a37",
  storageBucket: "easylogin-a1a37.appspot.com",
  messagingSenderId: "820536119363",
  appId: "1:820536119363:web:15fc63fb5c051cfbf344f6",
  measurementId: "G-QG4CPB6CZM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
