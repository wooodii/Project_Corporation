import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase';
import styles from "../../page/login/Register.module.css";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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
            name : user.name,
            email : user.email,
            password : user.password
        });
    }

    const register = async (e) =>  {
        e.preventDefault();
        try{
            const userCertify = await createUserWithEmailAndPassword(
                auth, email, password, name
            );
            UserInfo(userCertify.user); console.log(userCertify.user);
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
        <div className={styles.back}>

            <div className={styles.wrap}>
            <h3>회원가입</h3>
            <hr />

            <p>
                가고 싶은 곳, 머물고 싶은 곳 <br/>
                <span style={{color : "#F28705", fontWeight : "bold"}}>한샘 </span>에 오신 것을 환영합니다.
            </p>

            <form className={styles.form} onSubmit={register}>
                <div>
                    <label for="name"> 이름　　 </label>
                        <input 
                        className={styles.input}
                        id="name"
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}} 
                        placeholder="" />
                </div>

                <div>
                    <label for="email">이메일　 </label>
                        <input 
                        id="email"
                        className={styles.input}
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}} 
                        placeholder="" />
                        {/* <p style={{color : "red"}}>{emailError} </p> */}
                </div>

                <div>
                    <label for="password">비밀번호</label>
                        <input 
                        id="password" 
                        className={styles.input}
                        value={password} 
                        onChange={(e) => {setPassword(e.target.value)}} 
                        placeholder="　6자리 이상 입력하세요" />
                    {/* <p style={{color : "red"}}>{pwdError} </p> */}
                </div>
                
                <p>회원가입이 완료되면 로그인 페이지로 이동합니다.</p>
                <button className={styles.register_btn} type="submit">회원가입</button>

            </form>


            </div>

        </div>
    )
    }

export default Register