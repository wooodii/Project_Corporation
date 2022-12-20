import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase';
import styles from "../../page/login/Register.module.css";

const Register = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    
    //회원가입
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // 오류알람 
    const [emailError, setEmailError] = useState();
    const [pwdError, setpwdError] = useState();

    // DB저장 
    const UserInfo = async(user) => {
        await setDoc(doc(db, "user", user.uid), {
            user : user.uid,
            name : name,
            email : user.email,
            password : password
        })
    }

    const register = async (e) =>  {
        e.preventDefault();
        try{
            const userCertify = await createUserWithEmailAndPassword(
                auth, email, password, name
            );
            UserInfo(userCertify.user);
            console.log(userCertify.user);
            navigate('/login');
        }catch(error){
            const errorCode = error.code;
            console.log(errorCode);
            if(errorCode ==  "auth/email-already-in-use"){
                setEmailError("사용중인 이메일 입니다.")
            }else if(errorCode == "auth/weak-password"){
                setpwdError("비밀번호를 6자리 이상으로 설정하세요")
            }
        }
    };

    return(
        <>
            <h3>회원가입</h3>
            <hr />
            <p style={{fontSize :"0.8rem"}}>
            회원가입을 위한 필수 정보를 입력해주세요. <br/>
            회원가입이 완료되면 로그인 페이지로 이동합니다.</p>

            <form onSubmit={register}>
                <div>
                    <label htmlFor="">
                        <span>이름</span>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Name" />
                    </label>
                </div>

                <div>
                    <label>
                        <span>이메일</span>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" />
                        <p style={{color : "red"}}>{emailError} </p>
                    </label>
                </div>

                <div>
                    <label htmlFor="">
                        <span>비밀번호</span>
                        <input valu={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
                    </label>
                    <p style={{color : "red"}}>{pwdError} </p>
                </div>
                <button type="submit">회원가입</button>
            </form>
        </>
    )
    }

export default Register