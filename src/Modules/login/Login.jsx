import  { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginState } from "./loginSlice";

const Login = () => {
    // reducer
    const login = useSelector((state) => (state.login));
    const dispatch = useDispatch();
    
    // db : const q = query(collection(db, "posts"), where("category", "==", "etc"));
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginCheck, setLoginCheck] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    // 상태지속, 로그인 => 브라우저 index db
    const signin = async () => {
        try{
            const result = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    return signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
                        dispatch(setLoginState({name : login.name}))
                    }).catch((error) => {  
                        setLoginCheck(error + '정보가 저장되지 않습니다. 다시 로그인해주세요')
                    });
                    console.log(result);
                    console.log('success');
                    navigate('/mypage');
                    setLoginState(true); 
                    // 로그아웃버튼으로 변경하기
        }catch(error){
            console.log(error);
            setLoginCheck('회원정보를 찾을 수 없습니다. 다시 로그인해주세요')
        }
    }

    // 로그아웃
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