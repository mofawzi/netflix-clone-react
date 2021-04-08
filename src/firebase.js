import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAXVeOe77cZpnMVnpVXApVC53ndYsu1eNA",
  authDomain: "netflix-442be.firebaseapp.com",
  projectId: "netflix-442be",
  storageBucket: "netflix-442be.appspot.com",
  messagingSenderId: "865099629002",
  appId: "1:865099629002:web:ba08a40b2452007df68f33",
  measurementId: "G-WMTPEPBFZG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;