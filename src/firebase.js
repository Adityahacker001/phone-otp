// Import required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Add this line if missing

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDnR-HSqcks5rd2r2GlPLe0RYDG8T8KBAc",
  authDomain: "mobile-auth-d7625.firebaseapp.com",
  projectId: "mobile-auth-d7625",
  storageBucket: "mobile-auth-d7625.appspot.com", // ✅ Fixed this line (".app" → ".appspot.com")
  messagingSenderId: "1091890231867",
  appId: "1:1091890231867:web:ee82acba251be142857a1e",
  measurementId: "G-0462MWX0NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth properly
export const auth = getAuth(app);
export default app;
