import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBaUIFMf9J2VKd9qNP6gBUCDY6nElRNEUQ",
  authDomain: "instagram-ss-d8f98.firebaseapp.com",
  projectId: "instagram-ss-d8f98",
  storageBucket: "instagram-ss-d8f98.appspot.com",
  messagingSenderId: "527544236271",
  appId: "1:527544236271:web:f7362fc170cdccac03431a",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed file only once
// seedDatabase(firebase)

console.log('firebase', firebase);
export { firebase, FieldValue };
