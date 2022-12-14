// firebase 앱은 서비스 간에 인증을 공유하는 컨테이너와 유사한 객체
// Import the functions you need from the SDKs you need
// firebase 인증 기능을 사용하기 위한 initializeApp 함수 실행
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// 회원가입 (로그인, 로그아웃 ,정보수정 ) 위한 getAuth
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

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
// 현 접속한 사용자 인증 정보
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const apiKeyNum = firebaseConfig.apiKey;
