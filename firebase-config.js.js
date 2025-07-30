// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHRhFlAv5v84IGaklSlxujMYPjPcPfKvo",
  authDomain: "student-teacher-booking-ca12c.firebaseapp.com",
  projectId: "student-teacher-booking-ca12c",
  storageBucket: "student-teacher-booking-ca12c.appspot.com",
  messagingSenderId: "675620310131",
  appId: "1:675620310131:web:b38493b375185e2344ee06",
  measurementId: "G-V13DZT9HCE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
