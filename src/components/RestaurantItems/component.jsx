import ItemsList from "./../ItemsList";
import CartSummaryContainer from "../CartSummaryContainer/component";
import styled from "styled-components";

const Div = styled.div`
margin: 0 auto;
max-width: 768px;
`;

export default function RestaurantItems() {
  return (
    <Div>
        <ItemsList />
        <CartSummaryContainer />
    </Div>
  );
}
