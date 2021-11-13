import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDEL-vl2a8gz851d7HZ1FIQr2Djdrh-_HY",
  authDomain: "application-0930.firebaseapp.com",
  projectId: "application-0930",
  storageBucket: "application-0930.appspot.com",
  messagingSenderId: "17520612972",
  appId: "1:17520612972:web:59b45ca189c974bf31ea49",
  measurementId: "G-032152WGG3"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
