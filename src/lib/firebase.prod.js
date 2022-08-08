import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  // apiKey: "AIzaSyCoPG2uHw_7nktqZ8YedT0QLC3UaQ0VfJU",
  // authDomain: "netflix-clone-64edb.firebaseapp.com",
  // projectId: "netflix-clone-64edb",
  // storageBucket: "netflix-clone-64edb.appspot.com",
  // messagingSenderId: "461476057818",
  // appId: "1:461476057818:web:6d337d8c3b757dd9accbe3",
  apiKey: "AIzaSyD8WHjYaeuRAYnaaAuYx-F4KYc07MctF10",
  authDomain: "netflix-41486.firebaseapp.com",
  projectId: "netflix-41486",
  storageBucket: "netflix-41486.appspot.com",
  messagingSenderId: "1086880929767",
  appId: "1:1086880929767:web:592105aa89fcc0f897cf42",
  measurementId: "G-8W3NG9WSES",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
