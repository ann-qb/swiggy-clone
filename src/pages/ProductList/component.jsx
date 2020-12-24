import ItemsList from "./ItemsList";
import CartSummaryContainer from "./CartSummaryContainer/component";
import styled from "styled-components";
import OrderList from "./OrderList/component";

const Div = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

export default function ProductList() {
  return (
    <Div>
      <ItemsList />
      <CartSummaryContainer />
      <OrderList />
    </Div>
  );
}
