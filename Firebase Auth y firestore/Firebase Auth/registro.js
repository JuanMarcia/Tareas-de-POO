
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyALhRrbLb6dLzUJMfuriKPqEenC2fyy2-k",
  authDomain: "fir-e8d75.firebaseapp.com",
  projectId: "fir-e8d75",
  storageBucket: "fir-e8d75.appspot.com",
  messagingSenderId: "214171087255",
  appId: "1:214171087255:web:b6fadbf7f87a367679d4d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEventListener('click', (e) => {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("usuario creado");
        auth.singOut();
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
});