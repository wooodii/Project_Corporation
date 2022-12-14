import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../database/firebase";
import { setLoginState } from "./loginSlice";

import { doc, setDoc } from "firebase/firestore";
import {db} from '../../database/firebase';

// 현재 로그인한 사용자 가져오기(세션체크)
    const login = useSelector((state) => (state.login));
    const dispatch = useDispatch();

    const LoginCheck = () => {
        return function (dispatch){
            auth.onAuthStateChanged((user) => {
                if(user){
                    dispatch(setLoginState())
                }else{
                    // 로그아웃
                    //dispatch()
                }
        })
    }
}

export default LoginCheck;

