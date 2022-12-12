import { useEffect, useState } from "react";
// import firebase library 
import { createUserWithEmailAndPassword, 
    onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from '../database/firebase';

const Register = () => {
    // register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword
            );
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    };     

    return (
        <>
        <br/>
        <input placeholder="Email" onChange={(e) => {
            setRegisterEmail(e.target.value);
        }}/> <br/>
        <input placeholder="password" onChange={(e) =>{
            setRegisterPassword(e.target.value);
        }} /> <br/><br/>
        <button onClick={register}>회원가입</button>
        </>
    );
}

export default Register;