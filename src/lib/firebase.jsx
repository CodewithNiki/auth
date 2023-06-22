import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { firebaseConfig } from "./firebase.config"


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

