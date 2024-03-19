import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYOkan-gkasL_acas2hEe-7kI1UWxY1lU",
  authDomain: "hanstechspot.firebaseapp.com",
  projectId: "hanstechspot",
  storageBucket: "hanstechspot.appspot.com",
  messagingSenderId: "878207877813",
  appId: "1:878207877813:web:7c44763001b1ebcdf3f4fc",
  measurementId: "G-MXMC5TXE1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app, {
  host: 'firestore.googleapis.com',
  ssl: true,
  cacheSizeBytes: 10000000, // 10 MB
});

export { auth, db };