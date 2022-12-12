import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../database/firebase";
import { useEffect, useState } from "react";

const Login = () => {
    // login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({}); 
    
    useEffect(() => {   
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
    });
    },[])
    
    // login
    const login = async() => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassword
            );
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    };

    // logout
    const logout = async () => {
        await signOut(auth); 
    }; 

    return (
        <>
            <h3>로그인</h3>
            <input placeholder="Email" onChange={(e) => {
                setLoginEmail(e.target.value); 
            }}/> <br/>
            <input placeholder="Password" onChange={(e) => {
                setLoginPassword(e.target.value); 
            }}/> <br/>
            <button onClick={login}>로그인</button> 
            <button onClick={logout}>로그아웃</button>
        </> 
    );
}

export default Login;