// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfB8eCNoXJXY9y65gn6P0grScQ9jcEoKA",
  authDomain: "crud-fire-react-144e5.firebaseapp.com",
  databaseURL: "https://crud-fire-react-144e5-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-144e5",
  storageBucket: "crud-fire-react-144e5.appspot.com",
  messagingSenderId: "534332813662",
  appId: "1:534332813662:web:08de80917d92ae59ff5fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)