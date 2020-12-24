import { createSlice } from "@reduxjs/toolkit";

let initialState = { orderList: [] };

const orderListSlice = createSlice({
  name: "updateOrderList",
  initialState,
  reducers: {
    addOrder(state, action) {
      const newOrder = {
        orderId: state.orderList.length,
        orderStatus: "Active",
        orderDetails: action.payload.cartItems,
      };
      // Can't access cartSlice data in here so passing the required stuff through a payload. Below code is useless. Is this the correct implementation?
      //   state.data.forEach((item) => {
      //     if (item.quantity > 0) {
      //       newOrder.orderDetails.push(item);
      //       item.quantity = 0;
      //     }
      //   });
      state.orderList.push(newOrder);
    },
    removeOrder(state, action) {
      const id = parseInt(action.payload.id);
      state = state.orderList.filter((each) => each.orderId !== id);
    },
    updateOrderStatus(state, action) {
      const id = parseInt(action.payload.id);
      state.orderList.forEach((item) => {
        if (item.orderId === id) {
          item.orderStatus = action.payload.status;
        }
      });
    },
  },
});

export const {
  addOrder,
  removeOrder,
  updateOrderStatus,
} = orderListSlice.actions;
export default orderListSlice.reducer;
