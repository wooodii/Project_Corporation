import { useState } from "react";
// import firebase library 
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase';

const Register = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    
    // register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [checkRegister, setCheckRegister ] = useState();

    // Info add
    const UserInfo = async(user) => {
        await setDoc(doc(db, "user", user.uid), {
            user : user.uid,
            name : registerName,
            email : registerEmail,
            password : registerPassword
        });
    }

    const register = async () => {
        try {
            const useri = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword, registerName
            );
            navigate('/login');
            UserInfo(useri.user);
            console.log(useri);
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
        <input placeholder="Name" value={registerName} onChange={(e) => {setRegisterName(e.target.value)}} /> <br/>
        <input placeholder="Email" value={registerEmail} onChange={(e) => {setRegisterEmail(e.target.value);
        }}/> <br/>
        <input placeholder="password" value={registerPassword} onChange={(e) => {setRegisterPassword(e.target.value);
        }} /> <br/><br/>
        <button onClick={register}>회원가입</button>
        </>
    );
}

export default Register;