import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAWKKrIUm0dl4xRUjQ_y4sf6pWEqxeHXro",
    authDomain: "crwnbd.firebaseapp.com",
    databaseURL: "https://crwnbd.firebaseio.com",
    projectId: "crwnbd",
    storageBucket: "crwnbd.appspot.com",
    messagingSenderId: "908560680722",
    appId: "1:908560680722:web:bcd6468e278c6137c215cb"
  };


firebase.initializeApp(config)

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default  firebase;