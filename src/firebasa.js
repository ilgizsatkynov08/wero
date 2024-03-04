import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBJV075rzZzOF3WoOOqNC4yoY0Llkm57As",
    authDomain: "test-d483d.firebaseapp.com",
    projectId: "test-d483d",
    storageBucket: "test-d483d.appspot.com",
    messagingSenderId: "317344884111",
    appId: "1:317344884111:web:0b3d1c83e4afd5093717fa"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage()
export const auth = getAuth(app)
export default app;