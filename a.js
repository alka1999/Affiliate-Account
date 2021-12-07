// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgBvGz9XdofvweNeUd1dve7XLTd7W1D6E",
    authDomain: "affiliate-account-creation.firebaseapp.com",
    projectId: "affiliate-account-creation",
    storageBucket: "affiliate-account-creation.appspot.com",
    messagingSenderId: "945882612414",
    appId: "1:945882612414:web:a5b7a0d2228e3e53e154ef",
    measurementId: "G-5V25YVC55E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//my (alka's) code
function storeData() {
    /*firebase.database().ref("User").set({
        name: document.getElementById("nameField").value,
        phone: document.getElementById("phoneField").value,
        email: document.getElementById("emailField").value,
        pass: document.getElementById("passField").value
    });*/
    var name = document.getElementById("nameField");
    var phone = document.getElementById("phoneField");
    var email = document.getElementById("emailField");
    var pass = document.getElementById("passField");

    function writeUserData(name, phone, email, pass) {
        firebase.database().ref('users/' + userId).set({
            name: document.getElementById("nameField").value,
            phone: document.getElementById("phoneField").value,
            email: document.getElementById("emailField").value,
            pass: document.getElementById("passField").value,

        });
    }
}
