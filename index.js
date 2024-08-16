import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyBQ10r2olrt-wJ9waqVsFOSXFC1obpNe2A",
  authDomain: "marshop-77896.firebaseapp.com",
  projectId: "marshop-77896",
  storageBucket: "marshop-77896.appspot.com",
  messagingSenderId: "287335245876",
  appId: "1:287335245876:web:49746e7872f3071036c261",
  measurementId: "G-SFE9TS8BD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let emailR = document.querySelector("#emailR");
let passR = document.querySelector("#passR");
let buttonR = document.querySelector("#buttonR");
let emailL = document.querySelector("#emailL");
let passL = document.querySelector("#passL");
let buttonL = document.querySelector("#buttonL");
let buttonO = document.querySelector('#buttonO');

// Registro usuario
buttonR.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailR.value, passR.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Registro exitoso");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Login
buttonL.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, emailL.value, passL.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login exitoso");

      // Mostrar alerta de conexión correcta
      alert('La conexión es correcta.');
    })
    .catch((error) => {
      console.log(error);
    });
});

// LogOut
buttonO.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("Cierre de sesión exitoso");
  }).catch((error) => {
    console.log(error);
  });
});

// Detecta los cambios en la sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario conectado: " + user.email);
  } else {
    console.log("Desconectado");
  }
});
