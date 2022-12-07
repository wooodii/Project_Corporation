// firebase 앱은 서비스 간에 인증을 공유하는 컨테이너와 유사한 객체
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// 인증키로 확인
const firebaseConfig = {
  apiKey: "AIzaSyAkHOr2lpst29Dq70Hiv0dN_JIJdT1uPBo",
  authDomain: "counsel-cf747.firebaseapp.com",
  projectId: "counsel-cf747",
  storageBucket: "counsel-cf747.appspot.com",
  messagingSenderId: "514362207591",
  appId: "1:514362207591:web:3d4ffd6b8df648be3113c2",
  measurementId: "G-M7BR9XJJP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);