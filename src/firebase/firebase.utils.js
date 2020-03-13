import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4mvGHkfJuR4B5fZCNP3n2U3gnOVQn1c8",
    authDomain: "e-commerce-db-7d095.firebaseapp.com",
    databaseURL: "https://e-commerce-db-7d095.firebaseio.com",
    projectId: "e-commerce-db-7d095",
    storageBucket: "e-commerce-db-7d095.appspot.com",
    messagingSenderId: "971143685756",
    appId: "1:971143685756:web:16a2dedd3858c98183cbf9",
    measurementId: "G-4DZXZLRB5K"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
