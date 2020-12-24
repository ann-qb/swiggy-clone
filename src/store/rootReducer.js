import cartSlice from "./../slices/cart.slice";
import orderListSlice from "./../slices/orderlist.slice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    cartSlice,
    orderListSlice
});