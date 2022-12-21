import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : 'ui',
    initialState : {cartIsVisible : false},
    reducers : { 
        toogle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const uiAction = uiSlice.actions;
export default uiSlice;