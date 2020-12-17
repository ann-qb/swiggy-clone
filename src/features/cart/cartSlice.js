import { createSlice } from "@reduxjs/toolkit";
import itemList from "./../../data";

const cartSlice = createSlice({
  name: "updateCart",
  initialState: itemList,
  reducers: {
    increment(state, action) {
      const id = parseInt(action.payload);
      return state.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity + 1 };
        }
        return each;
      });
    },
    decrement(state, action) {
      const id = parseInt(action.payload);
      return state.map((each) => {
        if (each.id === id) {
          return { ...each, quantity: each.quantity - 1 };
        }
        return each;
      });
    },
    reset(state, action) {
      return itemList;
    },
  },
});

export const { increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
