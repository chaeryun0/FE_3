import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Firebase를 이용하려면 Firebase를 초기화하는 과정이 필요
const app = initializeApp(firebaseConfig);

// firestore 를 초기화, import 해주어야 함
const appFireStore = getFirestore(app); // 초기화한 Firebase 객체를 전달

// firestore 인증 초기화
const appAuth = getAuth();

const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp };
