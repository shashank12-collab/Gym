// auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Login failed:", error.message);
        alert("Invalid email or password");
        return null;
    }
}
