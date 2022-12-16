import  { browserSessionPersistence, getAuth, GoogleAuthProvider, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoginState } from "../../Modules/loginSlice";

const Login = () => {
    // reducer
    // db : const q = query(collection(db, "posts"), where("category", "==", "etc"));
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [LoginCheck, setLoginCheck] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    // googleLogin
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            navigate('/mypage');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
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
                    console.log(result);
                    console.log('success');
                    navigate('/mypage');
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
            }}/> <br/><br/> 
            <p style={{fontSize : "0.8rem", color : "red"}}>{LoginCheck} </p>
            <button onClick={signin}>로그인</button>
            <button onClick={googleLogin}>구글계정 로그인</button>
            <button onClick={signout}>로그아웃</button> <br/>
        </> 
    );
}

export default Login;