
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = { 
    apiKey: "AIza...", 
    authDomain: "asir-connect.firebaseapp.com", 
    projectId: "asir-connect", 
    storageBucket: "asir-connect.appspot.com", 
    messagingSenderId: "...", 
    appId: "...", 
};


// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);
const storage = getStorage(app);
// The auth object will be initialized with a dummy config, but not used for real auth.
const auth = getAuth(app);

export { app, db, storage, auth };
