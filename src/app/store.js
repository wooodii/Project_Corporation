// redux store 인스턴스 생성
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Modules/counterSlice';
import loginReducer, { loginState } from '../Modules/loginSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';




// configureStore 를 reducer 전달
// 리덕스 상태 개체를 상태 슬라이스로 분할
export default configureStore({
    // action이 전달될때마다 update 여부와 방법 결정
  reducer: {
    counter: counterReducer,
    login : loginReducer,
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['login/loginState'],
    },
  }),
})


