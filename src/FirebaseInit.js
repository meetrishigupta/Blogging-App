// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFkTYZ1E90nZ1QrI8u5chnvhGOQ1VQEys",
  authDomain: "blogging-app-5d4df.firebaseapp.com",
  projectId: "blogging-app-5d4df",
  storageBucket: "blogging-app-5d4df.appspot.com",
  messagingSenderId: "781589429512",
  appId: "1:781589429512:web:01dfbbdeec8e65030e00bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
