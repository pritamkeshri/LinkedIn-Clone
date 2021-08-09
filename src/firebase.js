import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLhdKKSwwwfKZKggpad0p696VvJ_1GbNM",
    authDomain: "linkdin-clone-b1efb.firebaseapp.com",
    projectId: "linkdin-clone-b1efb",
    storageBucket: "linkdin-clone-b1efb.appspot.com",
    messagingSenderId: "536986557223",
    appId: "1:536986557223:web:7999935e6eace1d77a2702"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};