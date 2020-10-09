import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyACjRbzpxuz25hX7XOnFfqgO9rElGJkT6c",
  authDomain: "clone-14342.firebaseapp.com",
  databaseURL: "https://clone-14342.firebaseio.com",
  projectId: "clone-14342",
  storageBucket: "clone-14342.appspot.com",
  messagingSenderId: "287797065380",
  appId: "1:287797065380:web:7b280627edc503c7d99831",
  measurementId: "G-M9FSL4SEW5",
});

const auth = firebaseApp.auth();

export default auth;
