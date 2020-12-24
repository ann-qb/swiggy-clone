import "./App.css";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderDetails from "./pages/OrderDetails/component";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/productlist" exact>
          <ProductList />
        </Route>
        <Route path="/order/:id" exact>
          <OrderDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
