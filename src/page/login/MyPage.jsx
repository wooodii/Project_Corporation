import { getAuth, reauthenticateWithCredential, updatePassword } from "firebase/auth";

const MyPage = () => {
    // 암호재설정링크 + 회원정보 수정
    // 현재 로그인한 사용자 프로필 가져오기
    const auth = getAuth();
    const user = auth.currentUser;
    const newPassword = "" // getASecureRandomPassword();

    // 사용자 재인증  => 이메일로 작성 auth
    // const credential = auth.EmailAuthProvider.credential(
    //     user.email,
    // );
    
    // 재인증
    // reauthenticateWithCredential(user, credential).then(() => {
    //     updatePassword(user, newPassword).then(() => {

    //     }).catch((error) => {
            
    //     })
    //   }).catch((error) => {
    //     // An error ocurred
    //     // ...
    //   });

    return (
        <>
        {}
        <button>비밀번호 변경</button> <br/>
        <button>개인정보 변경</button>
        </>
    );
}

export default MyPage;