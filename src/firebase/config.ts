import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAPLRP9Jvg1qOpdDaeiX9Z6jHuenAu5Mr0",
	authDomain: "playsong-7a9ce.firebaseapp.com",
	projectId: "playsong-7a9ce",
	storageBucket: "playsong-7a9ce.appspot.com",
	messagingSenderId: "145538971440",
	appId: "1:145538971440:web:e82c85045fb36ed5b43af5",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
