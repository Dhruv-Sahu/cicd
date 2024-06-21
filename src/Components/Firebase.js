// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyAxV2g03zXd2HGmRJyJumKld6RxilH1AyM",

  authDomain: "climeclabs-web.firebaseapp.com",

  projectId: "climeclabs-web",

  storageBucket: "climeclabs-web.appspot.com",

  messagingSenderId: "507368781911",

  appId: "1:507368781911:web:c170a80b2fb9a0c9a10b12",

  measurementId: "G-5T3QMVYHJY"

};

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// // Initialize Firebase Auth
// const auth = getAuth(app);

export { db};
