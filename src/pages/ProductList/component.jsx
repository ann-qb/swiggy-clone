import ItemList from "./ItemList";
import CartSummaryContainer from "./CartSummaryContainer/component";
import OrderList from "./OrderList/component";
import { useSelector } from "react-redux";

export default function ProductList() {
  const { loggedIn } = useSelector((state) => state.loginSlice);
  return (
    <>
      <ItemList />
      {loggedIn ? (
        <>
          <CartSummaryContainer />
          <OrderList />
        </>
      ) : null}
    </>
  );
}
