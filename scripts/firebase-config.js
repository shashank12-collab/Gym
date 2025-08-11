// scripts/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNNp_LIc8yIhS9hcT3xjTjH4DaRRspQRU",
  authDomain: "gymm-1957a.firebaseapp.com",
  projectId: "gymm-1957a",
  storageBucket: "gymm-1957a.firebasestorage.app",
  messagingSenderId: "540251421976",
  appId: "1:540251421976:web:4101fb25ea9bf5fc35326d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
