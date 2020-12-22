// import { reset } from "./../../features/cart/cartSlice";
// import { connect } from "react-redux";
// import CartSummary from "../CartSummary/component";

// const mapStateToProps = (state) => {
//   return {
//     numberOfItems: state.reduce(
//       (acc, each) => (each.quantity > 0 ? (acc += each.quantity) : acc),
//       0
//     ),
//     totalPrice: state.reduce(
//       (acc, each) =>
//         each.quantity > 0 ? (acc += each.price * each.quantity) : acc,
//       0
//     ),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCheckOut: () => {
//       dispatch(reset());
//     },
//   };
// };

// const CartSummaryContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartSummary);
// export default CartSummaryContainer;

import { reset } from "./../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartSummary from "../CartSummary/component";

export default function CartSummaryContainer(props) {
  const { data } = useSelector((state) => state);
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
  const onCheckOut = () => {
    dispatch(reset());
  };
  return (
    <CartSummary
      numberOfItems={numberOfItems}
      totalPrice={totalPrice}
      onCheckOut={onCheckOut}
    />
  );
}
