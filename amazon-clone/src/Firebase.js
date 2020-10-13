import firebase from "firebase";

const firebaseConfig ={
  apiKey: "AIzaSyACjRbzpxuz25hX7XOnFfqgO9rElGJkT6c",
  authDomain: "clone-14342.firebaseapp.com",
  databaseURL: "https://clone-14342.firebaseio.com",
  projectId: "clone-14342",
  storageBucket: "clone-14342.appspot.com",
  messagingSenderId: "287797065380",
  appId: "1:287797065380:web:7b280627edc503c7d99831",
  measurementId: "G-M9FSL4SEW5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
