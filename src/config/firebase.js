import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// const {
//     REACT_APP_A,
//     REACT_APP_B,
//     REACT_APP_C,
//     REACT_APP_D,
//     REACT_APP_E,
//     REACT_APP_F
// } = process.env;

// console.log(REACT_APP_A)

// const firebaseConfig = {
//     apiKey: REACT_APP_A,
//     authDomain: REACT_APP_B,
//     projectId: REACT_APP_C,
//     storageBucket: REACT_APP_D,
//     messagingSenderId: REACT_APP_E,
//     appId: REACT_APP_F
// };

const firebaseConfig = {
    apiKey: "AIzaSyA_g-P27QEVtFD4DQ7gCiQ_6JEW4__l7fU",
    authDomain: "chat-app-27007.firebaseapp.com",
    projectId: "chat-app-27007",
    storageBucket: "chat-app-27007.appspot.com",
    messagingSenderId: "1073368383837",
    appId: "1:1073368383837:web:f7c1d411fd31721ab668b4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;