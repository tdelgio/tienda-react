import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmjMt1Xn8G1lq0oXZchJPABa3SpWXz7fk",
  authDomain: "tienda-tdelgio.firebaseapp.com",
  projectId: "tienda-tdelgio",
  storageBucket: "tienda-tdelgio.appspot.com",
  messagingSenderId: "527835652935",
  appId: "1:527835652935:web:249cf1eac181413dbea262",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
