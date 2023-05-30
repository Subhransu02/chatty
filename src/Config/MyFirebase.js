import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDrQ_TDSPqLx9vzajZ1sMcUi5l_E9UMHRY",
  authDomain: "chat-application-eb3fa.firebaseapp.com",
  databaseURL: "https://chat-application-eb3fa-default-rtdb.firebaseio.com",
  projectId: "chat-application-eb3fa",
  storageBucket: "chat-application-eb3fa.appspot.com",
  messagingSenderId: "747343255094",
  appId: "1:747343255094:web:59651f07d0c88e6105ea97"

};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
