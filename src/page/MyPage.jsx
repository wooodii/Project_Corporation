import { getAuth, reauthenticateWithCredential } from "firebase/auth";

const MyPage = () => {
    // 암호재설정링크 + 회원정보 수정
    // 현재 로그인한 사용자 프로필 가져오기
    const auth = getAuth();
    const user = auth.currentUser;

    // 사용자 재인증  ? 비밀번호 재설정
    const credential = auth.EmailAuthProvider.credential(
        user.email,
        userProvideredPassword
    );

    const pwdChange = () => {
        user.reauthenticateWithCredential(user, credential).then(() => {
        auth.sendPasswordResetEmail(userEmail).then(function(){
            console.log('success, 비밀번호 변경 수행');
        }).catch(function (error) { 
            console.log(error);
        })
    }).catch((error) => {
        console.log(error);
    })
    } 

    return (
        <>
        <button onClick={pwdChange}>비밀번호 변경</button>
        </>
    );
}

export default MyPage;