// firebase 앱은 서비스 간에 인증을 공유하는 컨테이너와 유사한 객체
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// 회원가입 위한 getAuth
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// 인증키로 확인
const firebaseConfig = {
  apiKey: "AIzaSyAynzyF93ksIj6rv_uSMMZTpOP6pvsZELM",
  authDomain: "counselapp-2038c.firebaseapp.com",
  projectId: "counselapp-2038c",
  storageBucket: "counselapp-2038c.appspot.com",
  messagingSenderId: "617302229029",
  appId: "1:617302229029:web:59708c1f4ba6f555b0ffcc",
  measurementId: "G-48K3K5H16H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
