import ItemsList from "./../ItemsList";
import CartSummaryContainer from "../CartSummaryContainer/component";
import styled from "styled-components";
import OrderList from "../OrderList/component";
import Header from "../Header";
import OrderDetails from "../OrderDetails/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Div = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

export default function RestaurantItems() {
  return (
    <Router>
      <Div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ItemsList />
            <CartSummaryContainer />
            <OrderList />
          </Route>
          <Route path="/home" exact>
            <ItemsList />
            <CartSummaryContainer />
            <OrderList />
          </Route>
          <Route>
            <OrderDetails path="/home/order/:id" exact />
          </Route>
        </Switch>
      </Div>
    </Router>
  );
}
