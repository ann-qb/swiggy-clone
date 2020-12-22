import { createSlice } from "@reduxjs/toolkit";
import itemList from "./../../data";

const initialState = { data: itemList };

const cartSlice = createSlice({
  name: "updateCart",
  initialState,
  reducers: {
    increment(state, action) {
      const id = parseInt(action.payload);
      state.data.forEach((each) => {
        if (each.id === id) {
          each.quantity += 1;
        }
      });
    },
    decrement(state, action) {
      const id = parseInt(action.payload);
      state.data.forEach((each) => {
        if (each.id === id) {
          each.quantity -= 1;
        }
      });
    },
    reset(state) {
      state = { ...initialState };
      // Does not work without this return statement. Why?
      return state;
    },
  },
});

export const { increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
