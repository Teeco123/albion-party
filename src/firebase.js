import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZ_YePqlMmOGSJRs9Uhs_aUWsvMlivlvU",
  authDomain: "albion-party.firebaseapp.com",
  databaseURL: "https://albion-party-default-rtdb.firebaseio.com",
  projectId: "albion-party",
  storageBucket: "albion-party.appspot.com",
  messagingSenderId: "1071686142375",
  appId: "1:1071686142375:web:44a94755d5834089f08e82",
  measurementId: "G-CE82Q86Y72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);