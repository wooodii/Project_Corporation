// redux store 인스턴스 생성
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Modules/counterSlice';
<<<<<<< HEAD
import loginReducer from '../Modules/loginSlice';
import cartSlice from '../Modules/cartSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import uiSlice from '../Modules/uiSlice';
=======
import loginReducer, { loginState } from '../Modules/loginSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';


>>>>>>> 8e983ad15872eeacff65b6ff11655385d809759b


// configureStore 를 reducer 전달
// 리덕스 상태 개체를 상태 슬라이스로 분할
export default configureStore({
    // action이 전달될때마다 update 여부와 방법 결정
  reducer: {
    counter: counterReducer,
    login : loginReducer,
<<<<<<< HEAD
    ui : uiSlice.reducer,
    cart : cartSlice.reducer
=======
    
>>>>>>> 8e983ad15872eeacff65b6ff11655385d809759b
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['login/loginState'],
    },
  }),
})


