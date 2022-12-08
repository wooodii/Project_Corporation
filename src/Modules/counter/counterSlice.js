import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name : 'counter',
    initialState  : {
        value : 0
    },
    reducers : {
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

export const {increment, decrement, incrementByAmount} = counterSlice.actions

// thunk라고 하는 비동기 논리를 수행할 수 있게 함
// 일반적인 작업처럼 dispatch 가능하며, 인수로 thunk함수를 사용해 think를 호출
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// selector
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer // 위의 createSlice참고 