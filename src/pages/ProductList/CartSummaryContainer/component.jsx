import { reset } from "../../../slices/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import CartSummary from "./CartSummary/component";
import { addOrder, updateOrderStatus } from "../../../slices/orderlist.slice";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState } from "react";

export default function CartSummaryContainer(props) {
  const { data } = useSelector((state) => state.cartSlice);
  const { orderList } = useSelector((state) => state.orderListSlice);
  const [redirectToOrderPage, setRedirectToOrderPage] = useState(false);
  const dispatch = useDispatch();

  const numberOfItems = data.reduce(
    (acc, each) => (each.quantity > 0 ? (acc += each.quantity) : acc),
    0
  );
  const totalPrice = data.reduce(
    (acc, each) =>
      each.quantity > 0 ? (acc += each.price * each.quantity) : acc,
    0
  );
  const onReset = () => {
    dispatch(reset());
  };
  const onCheckOut = () => {
    async function placeOrder() {
      const cartItems = data.filter((each) => each.quantity > 0);
      const response = await axios({
        method: "POST",
        url:
          "https://2f3a1faa-9ef5-488e-9b15-3c2d5c04172f.mock.pstmn.io/swiggy-clone/placeorder",
        data: { cartItems },
      });
      if (response.data.message === "Success") {
        dispatch(addOrder({ cartItems }));
        // Stale values so below code won't work
        // console.log(orderList);
        // console.log(orderList[orderList.length - 1]);
        // setTimeout(() => {
        //   dispatch(
        //     updateOrderStatus({
        //       id: orderList[orderList.length - 1].orderId,
        //       status: "Success",
        //     })
        //   );
        // }, 3000);
        setRedirectToOrderPage(true);
        onReset();
        // console.log("flag="+flag)
        // const order = orderList[orderList.length - 1];
        // console.log(orderList);
        // console.log(order);
        // <Redirect to={`/order/${order.orderId}`} />;
      } else {
        alert("Order could not be placed. Please try again later.");
      }
    }
    dispatch(placeOrder);
  };
  return (
    <>
      {redirectToOrderPage ? (
        <>
          {setTimeout(() => {
            dispatch(
              updateOrderStatus({
                id: orderList[orderList.length - 1].orderId,
                status: "Success",
              })
            );
          }, 5000)}
          <Redirect
            to={{
              pathname: `/order/${orderList[orderList.length - 1].orderId}`,
              state: { order: orderList[orderList.length - 1] },
            }}
          />
        </>
      ) : (
        <>
          <CartSummary
            numberOfItems={numberOfItems}
            totalPrice={totalPrice}
            onReset={onReset}
            onCheckOut={onCheckOut}
          />
        </>
      )}
    </>
  );
}
