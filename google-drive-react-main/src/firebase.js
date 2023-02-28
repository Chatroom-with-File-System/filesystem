import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGxX1RxKpF2_GDge-f9N5EnlPe-FfDTnA",
    authDomain: "drive-clone-2884e.firebaseapp.com",
    projectId: "drive-clone-2884e",
    storageBucket: "drive-clone-2884e.appspot.com",
    messagingSenderId: "230934645623",
    appId: "1:230934645623:web:348b18a0dcef3b4b602f72"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }