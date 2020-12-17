import { reset } from "./../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartSummary from "../CartSummary/component";

export default function CartSummaryContainer() {
  const data = useSelector((state) => state);
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
