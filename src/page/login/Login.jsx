import  { browserSessionPersistence, getAuth, GoogleAuthProvider, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginState, logoutState } from "../../Modules/loginSlice";
import { addUserInfo } from "../../Modules/userInfoSlice";

const Login = () => {
    // reducer
    const dispatch = useDispatch();
    const user = useSelector((state) => (state.currentUser));
    const InputUserInfo = useSelector((state) => (state.login.userInfo))
    
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginCheck, setLoginCheck] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    // googleLogin
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider);
        setPersistence(auth, browserSessionPersistence)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            dispatch(loginState(user));
            navigate('/mypage');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };

    // 상태지속, 로그인 => 브라우저 index db
    const signin = async () => {
        try{
            const result = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    return signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
                    }).catch((error) => {  
                        setLoginCheck(error + '정보가 저장되지 않습니다. 다시 로그인해주세요')
                    });
                    console.log(result.user);
                    console.log('success');
                    navigate('/mypage');
                    dispatch(loginState(result.user)); // result.user의 정보는 loginslice의 14번?
                    // 로그인 시 정보를 들고와서 loginSlice의 userInfo 에 저장
                    const data = await getDocs();
                    dispatch(InputUserInfo(data));
        }catch(error){
            console.log(error);
            setLoginCheck('회원정보를 찾을 수 없습니다. 다시 로그인해주세요')
        }
    }

    // 로그아웃
    const signout = async () => {
        try {
            const logout = await signOut(auth);
            navigate('/');
            dispatch(logoutState(logout));
            console.log(logoutState(logout ));
        }catch(error){
            alert(error)
        }
    }

    return (
        <>
            <input type="email" placeholder="Email" onChange={(e) => {
                setLoginEmail(e.target.value); 
            }}/> <br/>
            <input placeholder="Password" onChange={(e) => {
                setLoginPassword(e.target.value); 
            }}/> <br/><br/> 
            <p style={{fontSize : "0.8rem", color : "red"}}>{LoginCheck} </p>
            <button onClick={signin}>로그인</button>
            <button onClick={googleLogin}>구글계정 로그인</button>
            <button onClick={signout}>로그아웃</button> <br/>
        </> 
    );
}

export default Login;