// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      // ✅ Nach Login: zur Dashboard-Seite im gleichen Fenster
      window.location.href = "dashboard.html";
    })
    .catch(e => alert("Fehler beim Login: " + e.message));
};
