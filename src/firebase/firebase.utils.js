import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAQE_h8Y_j0nUqO3QMYRKDVyyhPzFZTk0s',
  authDomain: 'rafaflix-66f7a.firebaseapp.com',
  databaseURL: 'https://rafaflix-66f7a.firebaseio.com',
  projectId: 'rafaflix-66f7a',
  storageBucket: 'rafaflix-66f7a.appspot.com',
  messagingSenderId: '782995140318',
  appId: '1:782995140318:web:7040461ee617bce5779c4f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
