//import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "../components/products/Products";
import Cart from "../components/cart/Cart";
import NavBar from "../components/navbar/NavBar";
import Product from "./products/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products/:id" exact component={Product} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
