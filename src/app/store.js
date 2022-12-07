// redux store 인스턴스 생성
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Modules/counter/counterSlice'

// configureStore 를 reducer 전달
// 리덕스 상태 개체를 상태 슬라이스로 분할
export default configureStore({
    // action이 전달될때마다 update 여부와 방법 결정
  reducer: {
    counter: counterReducer
  }
})