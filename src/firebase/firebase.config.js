// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO8DkLtNUi1WCtglBeNw1pYtcW2YZylnk",
  authDomain: "dragon-news-a1df8.firebaseapp.com",
  projectId: "dragon-news-a1df8",
  storageBucket: "dragon-news-a1df8.appspot.com",
  messagingSenderId: "318686727023",
  appId: "1:318686727023:web:f38103a133ae459c22769a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;