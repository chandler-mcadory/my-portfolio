import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseApp = initializeApp(firebaseConfig);


export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);    // real time db
export const storage = getStorage(firebaseApp);        // db for user generated content
export default firebaseApp;