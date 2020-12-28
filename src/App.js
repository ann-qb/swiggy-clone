import "./App.css";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderDetails from "./pages/OrderDetails/component";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { fetchData } from "./slices/cart.slice";
import PageNotFound from "./components/PageNotFound";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProductList(dispatch) {
      const url =
        "https://2f3a1faa-9ef5-488e-9b15-3c2d5c04172f.mock.pstmn.io/swiggy-clone/getitemlist";
      const response = await axios.get(url);
      dispatch(fetchData(response.data));
    }
    dispatch(fetchProductList);
  }, []);

  return (
    <Router>
      <Div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/productlist" exact>
            <ProductList />
          </Route>
          {/* Is there another way to pass props in? */}
          <Route
            path="/order/:id"
            exact
            render={(props) => <OrderDetails {...props} />}
          />
          {/* <OrderDetails {...props}/>
        </Route> */}
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </Div>
    </Router>
  );
}

export default App;
