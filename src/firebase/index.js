//This is an endpoint set up with Firebase to upload images and get a URL right back

import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfAf9HVfrEEEUrIk-zIcd2ZjwTZSx4iTg",
  authDomain: "cyclemate-c8211.firebaseapp.com",
  databaseURL: "https://cyclemate-c8211.firebaseio.com",
  projectId: "cyclemate-c8211",
  storageBucket: "cyclemate-c8211.appspot.com",
  messagingSenderId: "518348126115",
  appId: "1:518348126115:web:f58edeb58789a1db520c16",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
