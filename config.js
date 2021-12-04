import firebase from 'firebase'
//require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB9QkKtTs3Wq0YoTX45ykvgvz5yzhlPgBc",
  authDomain: "wily-library-94f17.firebaseapp.com",
  projectId: "wily-library-94f17",
  storageBucket: "wily-library-94f17.appspot.com",
  messagingSenderId: "612201730838",
  appId: "1:612201730838:web:9893b020a7db2673cbb637"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();