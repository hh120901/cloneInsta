// import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyAhdGQr3tVBC2GHXsAdKFvVJ6VWN2uZtzs",
//   authDomain: "clone-instagram-react-b0b28.firebaseapp.com",
//   projectId: "clone-instagram-react-b0b28",
//   storageBucket: "clone-instagram-react-b0b28.appspot.com",
//   messagingSenderId: "921702409850",
//   appId: "1:921702409850:web:aa4bc0662f2ce099b07dc3",
//   measurementId: "G-XPYL91P3N8"
// });
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const auth = getAuth(app);
// const storage =getStorage(app);
// const db = getDatabase(app);
// export { db, auth, storage };

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAhdGQr3tVBC2GHXsAdKFvVJ6VWN2uZtzs",
    authDomain: "clone-instagram-react-b0b28.firebaseapp.com",
    projectId: "clone-instagram-react-b0b28",
    storageBucket: "clone-instagram-react-b0b28.appspot.com",
    messagingSenderId: "921702409850",
    appId: "1:921702409850:web:aa4bc0662f2ce099b07dc3",
    measurementId: "G-XPYL91P3N8"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage()
export const auth = getAuth(app)


