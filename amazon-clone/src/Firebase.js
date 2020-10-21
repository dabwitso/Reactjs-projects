import firebase from "firebase";

const firebaseConfig ={
  apiKey: "AIzaSyBnsrR8E0RL2gf0eSH_yH8CayGe8ZgjVH8",
  authDomain: "clone-demo-c4cbe.firebaseapp.com",
  databaseURL: "https://clone-demo-c4cbe.firebaseio.com",
  projectId: "clone-demo-c4cbe",
  storageBucket: "clone-demo-c4cbe.appspot.com",
  messagingSenderId: "413129908964",
  appId: "1:413129908964:web:39c28686286dd6d9cbc2f1",
  measurementId: "G-26CDZQJ9RJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
