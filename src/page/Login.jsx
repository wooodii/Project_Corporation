import  { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

// db접근, db접근해 데이터를 꺼내게 도와줌
import { getDatabase, set, ref } from "firebase/database";

import { db } from "../database/firebase";
import { doc, getDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // db
    // const q = query(collection(db, "posts"), where("category", "==", "etc"));
    const db = getDatabase();
    
    // login
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginCheck, setLoginCheck] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();
    

    // 데이터 쓰기
    function writeUserData(age, userId, name, email, imageUrl) {
        const db = getDatabase(); 
        // set 자식 노드 포함한 지정된 위치의 데이터 덮어씀
        set(ref(db, 'users/' + userId), {
            username : name,
            email : email,
            age : age,
            profilte_picture : imageUrl
        });
    }

    // 데이터 읽기
    const signin = async () => {
        try{
            const result = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            console.log(result);
            console.log('success');
            navigate('/mypage');
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
            }}/> <br/> <br/>            
            <p style={{fontSize : "0.8rem", color : "red"}}>{LoginCheck} </p>
            <button onClick={signin}>로그인</button>
            <button onClick={signout}>로그아웃</button> <br/>
        </> 
    );
}

export default Login;