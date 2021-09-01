import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB4S-NYHkGY-6iT8O0noGYUo9OmgqSDVEs",
  authDomain: "project71-92d96.firebaseapp.com",
  projectId: "project71-92d96",
  storageBucket: "project71-92d96.appspot.com",
  messagingSenderId: "133464877994",
  appId: "1:133464877994:web:e16c80a06936dd0e6299d3"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

