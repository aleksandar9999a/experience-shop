import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_f9BeIed-SFjz6PetHpXbTZNRFBc3caQ",
    authDomain: "experience-shop.firebaseapp.com",
    databaseURL: "https://experience-shop.firebaseio.com",
    projectId: "experience-shop",
    storageBucket: "experience-shop.appspot.com",
    messagingSenderId: "832283039558",
    appId: "1:832283039558:web:ce0f7eff6059f8b9783747",
    measurementId: "G-LEHXWG3VY1"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;