import { useState } from "react";

// import firebase library 
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase';
import { useDispatch } from "react-redux";
import { loginState } from "../../Modules/loginSlice";
import styles from "../../page/login/Register.module.css";

const Register = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();
    
    // register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [checkRegister, setCheckRegister ] = useState("");

    // input verify
    const [emailError, setEmailError] = useState(true);
    const [pwdError, setpwdError] = useState(true);
    
    // errorMessage
    const [emailMessage, setEmailMessage] = useState(); 
    const [pwdMessage, setPwdMessage] = useState();

    const verifyEmail = (e) => {
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        setRegisterEmail(e.target.value); 
        if(!e.target.value || emailRegExp.test(e.target.value)){
            setEmailError(false);
            setEmailMessage("이메일 형식이 올바르지 않습니다. 다시 입력해주세요"); 
        }else {setEmailError(true); setEmailMessage("올바른 이메일 형식이에요")}
    }

    const verifyPassword = (e) => {
        const pwdRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        setRegisterPassword(e.target.value);
        if(!e.target.value || pwdRegExp.test(e.target.value)){
            setpwdError(false);
            setPwdMessage("숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요");
        }else {setpwdError(true); setPwdMessage('안전한 비밀번호에요')}
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
            UserInfo(userCertify.user); console.log(userCertify.user);
            dispatch(loginState(userCertify.user.uid));
        } catch(error) {
            const errorCode = error.code;
            setCheckRegister('회원가입이 완료되지 않았습니다. 다시 시도해주세요');
        }
    };     

    return (
        <> 
        <div style={{border : "2px solid black", width : "70vh", margin : "0 auto"}}>
            <br/>
            <h3>회원가입</h3>
        <hr /> 
        <p style={{fontSize :"0.8rem"}}>
            회원가입을 위한 필수 정보를 입력해주세요. <br/>
            회원가입이 완료되면 로그인 페이지로 이동합니다.
        </p>
        <p style={{fontSize : "0.8rem", color : "red"}}> {checkRegister} </p>

        <form className={styles.loginForm} onSubmit={register}>
            <div>
                <label htmlFor="">
                    <span style={{fontSize : "0.8em"}}>이름</span> 
                    <input id="email" placeholder="Name" value={registerName} onChange={(e) => {setRegisterName(e.target.value);}}/> 
                </label>
            </div>
            
            <div>
                <label>
                    <span style={{fontSize : "0.8em"}}>이메일</span>  
                    <input placeholder="Email" value={registerEmail} onChange={verifyEmail}/>
                </label>

                {emailMessage && ( <div 
                style={{fontSize :  "11px", color : "red"}}> {setEmailMessage}</div> )} 
            </div>

            <div>
                <label htmlFor=""> 
                <span style={{fontSize : "0.8em"}}>비밀번호</span>  
                    <input className={styles.login} placeholder="password" value={registerPassword} onChange={verifyPassword} />
                    {pwdMessage && ( <div 
                        style={{fontSize :  "11px", color : "red"}}> {setPwdMessage} </div>)}
                </label>
            </div>
        <button type="submit" disabled={registerName && registerPassword} >회원가입</button> 
        </form>
        </div>
        
        </>
    );
}

export default Register;