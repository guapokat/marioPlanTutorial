import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  //
  // it's ok for this to be exposed
  // just have to change firebase rules
  //
  apiKey: "AIzaSyCAYz3zInceNbEGoyquIxWLBPqKmEdAmWw",
  authDomain: "marioplan-c278b.firebaseapp.com",
  databaseURL: "https://marioplan-c278b.firebaseio.com",
  projectId: "marioplan-c278b",
  storageBucket: "marioplan-c278b.appspot.com",
  messagingSenderId: "320537599312",
  appId: "1:320537599312:web:3ca05a3b03a40300"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// update in firebase library for how it works with timestamps
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
