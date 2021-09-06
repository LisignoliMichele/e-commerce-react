import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
   apiKey: "AIzaSyCwiIFhzX3h1mYu5se4ktn4whHWHed4M20",
   authDomain: "e-commerce-f3d27.firebaseapp.com",
   projectId: "e-commerce-f3d27",
   storageBucket: "e-commerce-f3d27.appspot.com",
   messagingSenderId: "95703818868",
   appId: "1:95703818868:web:73c46757a5f9da7c236721",
   measurementId: "G-N2ME9291VK"
 };

 firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
