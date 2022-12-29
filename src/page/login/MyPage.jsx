import { getAuth, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { useState } from "react";

const MyPage = () => {
    // 암호재설정링크 + 회원정보 수정
    // 현재 로그인한 사용자 프로필 가져오기
    
    const [password, newPassword] = useState();

    const changePassword = async (newPassword) => {
        try {
             const auth = getAuth(); 
             const user = auth.currentUser;
             const res = await updatePassword(user, newPassword);
             console.log(res);
        }catch({code, message}){
            console.log(code);
            alert("이전과 동일한 비밀번호입니다.")
        }
    }
    
    // // 재인증
    // const modificatePwd = () => {
    //     reauthenticateWithCredential(user, credential).then(() => {
    //     const newPassword = updatePassword(user, newPassword).then(() => { 
            
    //     }).catch((error) => {
            
    //     })
    //   }).catch((error) => {
    //   });
    // }
   
     return (
         <>
         <input onChange={(e) => {newPassword(e.target.value)}} ></input>
         <button onClick={changePassword}>비밀번호 변경</button> <br/>
         <button>개인정보 변경</button>
         </>
        );
 }

export default MyPage;