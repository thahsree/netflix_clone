import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyhcCIijbauvVbjaPpDmDOiwpOswl9zSU",
    authDomain: "netflix-40f93.firebaseapp.com",
    projectId: "netflix-40f93",
    storageBucket: "netflix-40f93.appspot.com",
    messagingSenderId: "292138789797",
    appId: "1:292138789797:web:4bf612b3a774a72148964c",
    measurementId: "G-6HLKZW241F"
  };



export default firebase.initializeApp(firebaseConfig)