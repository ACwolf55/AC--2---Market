import { createSlice } from "@reduxjs/toolkit";

export const cartNumSlice = createSlice({
    name: 'cartNum',
    initialState: {
        value:0
    },
    reducers: {
        setCartNum: (state, action) => {
            state.value = action.payload;
        },
        addCartNum: (state) => {
            state.value++;
        },
        minusCartNum: (state) => {
            state.value--;
        },
    }
})

export const { setCartNum, addCartNum, minusCartNum } =
    cartNumSlice.actions;

export const cartNum = (state) => state.cartNum.value;

export default cartNumSlice.reducer;