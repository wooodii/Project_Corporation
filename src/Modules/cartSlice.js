import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name : 'cart',
    initialState : {
        items : [], // 아이템 목록
        totalQuantity : 0, // 아이템 개수 
        totalAmount : 0 // 금액 개수
    },
    reducers :{
        // ACTION.PAYLOAD를 받아오는 코드?????
        addItemToCart(state, action){
            const newItem = action.payload; // 작업추가할 항목
            const existItem = state.items.find(item => item.id === newItem.id); // 현재 있는 항목
            state.totalQuantity++; // 전체 수량 증가
            if(!existItem){
                // 그냥 가격과 총 가격의 차이점
                state.items.push({itemId : newItem.id, price : newItem.price, quantity : 1,
                    totalPrice : newItem.price, name : newItem.title});
            }else {
                existItem.quantity = existItem + 1;
                existItem.totalPrice = existItem.totalPrice + newItem.price;
            }
        },
        removeItemCart(state, action){
            const id = action.payload; // id로 항목 찾아 배열에서 제거
            const existItem = state.items.find(item => item.id === id); 
            // 배열에 얼마나 많은 항목이 있는지 기존 항목을 가져오고, payload로 받은 아이디와 같은지 확인
            state.totalQuantity--;
            if(existItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                // 제거하려는 항목만 빼고 기존 항목 배열을 덮어씀 
            }else{
                existItem.quantity--;
            }
        }
    }

});


export const cartAction = cartSlice.actions; 
export default cartSlice;