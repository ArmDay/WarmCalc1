import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvMRrNpo9wQpBUlQQ6Mvp_VpLPbDeONKw",
    authDomain: "warmcalc.firebaseapp.com",
    projectId: "warmcalc",
    storageBucket: "warmcalc.appspot.com",
    messagingSenderId: "671479163480",
    appId: "1:671479163480:web:f18099caf47773379d782d",
    measurementId: "G-NECLPLLHE6",
    databaseURL: "https://warmcalc-default-rtdb.europe-west1.firebasedatabase.app"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {
    db
  }