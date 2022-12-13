import { useEffect, useState } from "react";
// import firebase library 
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {auth} from '../database/firebase';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    
    // register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [checkRegister, setCheckRegister ] = useState();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword, registerName
            );
            console.log(user);
            navigate('/login');
        } catch(error) {
            console.log(error.message);
            setCheckRegister('회원가입이 완료되지 않았습니다. 다시 시도해주세요');
        }
    };     

    return (
        <>
        <br/>
        <p style={{fontSize :"0.8rem"}}>회원가입이 완료되면 로그인 페이지로 넘어갑니다.</p>
        <p style={{fontSize : "0.8rem", color : "red"}}> {checkRegister} </p>
        <input placeholder="Name" onChange={(e) => {setRegisterName(e.target.value)}} /> <br/>
        <input placeholder="Email" onChange={(e) => {setRegisterEmail(e.target.value);
        }}/> <br/>
        <input placeholder="password" onChange={(e) => {setRegisterPassword(e.target.value);
        }} /> <br/><br/>
        <button onClick={register}>회원가입</button>
        </>
    );
}

export default Register;