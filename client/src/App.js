import React from "react";
import Navbar from "./modules/layout/components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mobile from "./modules/products/Mobile";
import Laptop from "./modules/products/Laptop";
import Watches from "./modules/products/Watches";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/mobiles" component={Mobile} />
          <Route exact path="/watches" component={Watches} />
          <Route exact path="/laptops" component={Laptop} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
