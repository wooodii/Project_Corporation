// redux store 인스턴스 생성
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Modules/loginSlice';
import cartSlice from '../Modules/cartSlice';
import uiSlice from '../Modules/uiSlice';
import BoardSlice from '../Modules/boardSlice';
import userInfoSlice from '../Modules/userInfoSlice';
import commentSlice from '../Modules/commnetSlice';

// configureStore 를 reducer 전달
// 리덕스 상태 개체를 상태 슬라이스로 분할
export default configureStore({
    // action이 전달될때마다 update 여부와 방법 결정
  reducer: {
    login : loginReducer,
    ui : uiSlice.reducer,
    cart : cartSlice.reducer,
    board : BoardSlice.reducer,
    userInfo : userInfoSlice.reducer,
    comment : commentSlice.reducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['login/loginState'],
    },
  }),
})


