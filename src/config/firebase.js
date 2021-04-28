import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const {
    REACT_APP_A,
    REACT_APP_B,
    REACT_APP_C,
    REACT_APP_D,
    REACT_APP_E,
    REACT_APP_F
} = process.env;

console.log(REACT_APP_A)

const firebaseConfig = {
    apiKey: REACT_APP_A,
    authDomain: REACT_APP_B,
    projectId: REACT_APP_C,
    storageBucket: REACT_APP_D,
    messagingSenderId: REACT_APP_E,
    appId: REACT_APP_F
};

firebase.initializeApp(firebaseConfig);

export default firebase;