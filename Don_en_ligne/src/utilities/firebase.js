// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB_TuBMHt2RdiSbmNuyKtETKmZNAHXPlBs",
  authDomain: "wallu-b28fc.firebaseapp.com",
  projectId: "wallu-b28fc",
  storageBucket: "wallu-b28fc.appspot.com",
  messagingSenderId: "288755132664",
  appId: "1:288755132664:web:43d953f0cdd6bfacf5f30d",
  measurementId: "G-6QF6XFL85V"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)