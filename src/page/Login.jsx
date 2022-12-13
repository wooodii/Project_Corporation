import  {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebase from '../database/firebase';

// db접근, db접근해 데이터를 꺼내게 도와줌
import { db } from "../database/firebase";
import { collection, connectFirestoreEmulator, getDocs} from 'firebase/firestore';
import { async, FirebaseError } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // login
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginCheck, setLoginCheck] = useState("");
    const auth = getAuth();
    
    const navigate = useNavigate();

    const signin = async () => {
        try{
            const result = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            console.log(result);
            console.log('success');
            navigate('/');
        }catch(error){
            console.log(error);
            setLoginCheck('회원정보를 찾을 수 없습니다. 다시 로그인해주세요')
        }
    }

    const signout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        }catch(error){
            alert(error)
        }
    }

    return (
        <>
            <input tpye="email" placeholder="Email" onChange={(e) => {
                setLoginEmail(e.target.value); 
            }}/> <br/>
            <input placeholder="Password" onChange={(e) => {
                setLoginPassword(e.target.value); 
            }}/> <br/>
            <button onClick={signin}>로그인</button>
            <button onClick={signout}>로그아웃</button> <br/>
            <p style={{fontSize : "0.8rem", color : "red"}}>{LoginCheck} </p>
        </> 
    );
}

export default Login;