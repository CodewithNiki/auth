import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig, connectAuthEmulator } from "./firebase.config"


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

