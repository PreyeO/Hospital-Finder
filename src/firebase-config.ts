import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACtjpbUDP_AGhqnP6Jai60cayPeUG2qWU",
  authDomain: "care-finder-393615.firebaseapp.com",
  projectId: "care-finder-393615",
  storageBucket: "care-finder-393615.appspot.com",
  messagingSenderId: "452907327062",
  appId: "1:452907327062:web:23b9ea56a88e54ab5a65f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
