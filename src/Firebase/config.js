import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDW99zbyWuzokSO6PABtfmKB3vSI_3KWMs",
  authDomain: "financetracker-85946.firebaseapp.com",
  projectId: "financetracker-85946",
  storageBucket: "financetracker-85946.appspot.com",
  messagingSenderId: "226719695047",
  appId: "1:226719695047:web:362d20fbf51687a2ed3ee2",
  measurementId: "G-JYV578S51Z"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectauth = firebase.auth();

export { projectFirestore, projectauth };