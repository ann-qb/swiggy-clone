import { createSlice } from "@reduxjs/toolkit";

let initialState = { data: [] };

const cartSlice = createSlice({
  name: "updateCart",
  initialState,
  reducers: {
    fetchData(state, action) {
      initialState = {...action.payload};
      state = {...action.payload};
      // Does not work without this return statement. Why?
      return state;
    },
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

export const { fetchData, increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
