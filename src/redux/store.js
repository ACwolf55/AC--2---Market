import { configureStore } from "@reduxjs/toolkit";
import  cartNumReducer  from "./cartNumSlice";

export default configureStore({
    reducer: {
        cartNum: cartNumReducer,
    },
});
