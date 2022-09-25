
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAynzCBhXfGR4YYuagRVwa-tgQZzO_rI8w",
    authDomain: "fir-project-3d694.firebaseapp.com",
    projectId: "fir-project-3d694",
    storageBucket: "fir-project-3d694.appspot.com",
    messagingSenderId: "323951738640",
    appId: "1:323951738640:web:fe3a996106521faa4a6f95",
    measurementId: "G-RLGNPC8TYK"
};

export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);