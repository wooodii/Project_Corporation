import { useState } from "react";
// import firebase library 
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase';
import { useDispatch } from "react-redux";
import { loginState } from "./loginSlice";

import styles from '../../Modules/login/Register.module.css';

const Register = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();

    // register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [checkRegister, setCheckRegister ] = useState();

    // input verify
    const [emailError, setEmailError] = useState(true);
    const [pwdError, setpwdError] = useState(true);

    const verifyEmail = (e) => {
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!e.target.value || emailRegExp.test(e.target.value)){
            setEmailError(false);
        }else {setEmailError(true); setRegisterEmail(e.target.value);}
    }

    const verifyPassword = (e) => {
        const pwdRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        if(!e.target.value || pwdRegExp.test(e.target.value)){
            setpwdError(false);
        }else {setpwdError(true); setRegisterPassword(e.target.value);}
    }

    // Info add
    const UserInfo = async(user) => {
        await setDoc(doc(db, "user", user.uid), {
            user : user.uid,
            name : registerName,
            email : user.registerEmail,
            password : registerPassword
        });
    }

    // sever update
    const register = async (e) => {
        e.preventDefault();
        try {
            const userCertify = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword, registerName
            );
            navigate('/login');
            // 서버에 유저 정보 담기? 
            UserInfo(userCertify.user); console.log(userCertify.user);
            dispatch(loginState(userCertify.user.uid));
        } catch(error) {
            console.log(error.message);
            setCheckRegister('회원가입이 완료되지 않았습니다. 다시 시도해주세요');
        }
    };     

    return (
        <>
        <br/>
        <p style={{fontSize :"0.8rem"}}>
            회원가입을 위한 필수 정보를 입력해주세요. <br/>
            회원가입이 완료되면 로그인 페이지로 넘어갑니다.
        </p>
        <p style={{fontSize : "0.8rem", color : "red"}}> {checkRegister} </p>

        <form onSubmit={register}>
            <div>
                <input id="email" placeholder="Name" value={registerName} onChange={(e) => {setRegisterName(e.target.value);}}/> 
            </div>
            
            <div>
                <input placeholder="Email" value={registerEmail} onChange={verifyEmail}/>
                
                {/** 이해X */}
                {emailError && ( <div 
                className="invalid-input"
                style={{fontSize :  "11px", color : "#D73E3E"}}> 다시 번호를 입력해주세요</div> )} 
            </div>
           
            <div>
                <input className={styles.login} placeholder="password" value={registerPassword} onChange={verifyPassword} />
            </div>

            {
                !emailError ? (<button type="submit">회원가입</button>) : (<div> 입력하지 않은 정보가 존재합니다. </div>)  
            }

        </form>
        </>
    );
}

export default Register;