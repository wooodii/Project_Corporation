import { createSlice } from "@reduxjs/toolkit"
// 리덕스에서 리듀서는 switch문과 action함수를 직접 작성했다면,
// 툴킷에서는 counterSlice로 분리해서 사용 

// 리듀서 함수 작성
export const counterSlice = createSlice({
    name : 'counter',
    // 초기값
    initialState  : {
        value : 0
    },
    reducers : {
        // 함수 안에 state값을 직접 접근해 바꿈
        // reducer와 다른 점
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            // state.value += action.payload > input으로 들어온 값
            state.value += action.payload
        },
    },
})

// 사용할 액션 함수 내보냄
export const {increment, decrement, incrementByAmount} = counterSlice.actions

// thunk라고 하는 비동기 논리를 수행할 수 있게 함
// 일반적인 작업처럼 dispatch 가능하며, 인수로 thunk함수를 사용해 think를 호출
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// selector // 사용할 액션 함수 내보냄
export const selectCount = (state) => state.counter.value
// 사용할 리듀서 내보냄
export default counterSlice.reducer // 위의 createSlice참고 