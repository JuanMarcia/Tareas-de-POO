
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

login.addEventListener('click', (e) => {
    var email = document.getElementById('emaillog').Value;
    var password = document.getElementById('passwordlog').Value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("Usuario logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/user-disabled')
            alert('El usuario ha sido deshabilitado');
        else if(errorCode == 'auth/user-not-found')
            alert('El usuario no existe');
        else if(errorCode == 'auth/wrong-password')
            alert('contraseña incorrecta');
    });
});

cerrar.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('sesion cerrada');
    }).catch((error) => {
        alert('error al cerrar sesion');
    });
})

auth.onAuthStateChanged(user => {
    if(user){
        console.log('Usuario activo');
        var email = user.emailVerfied;
        if(emailVerfied){
            window.open("https://www.google.com/")

        
        }else{
            auth.signOut();
        }

    }
})