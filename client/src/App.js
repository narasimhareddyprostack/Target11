import React from "react";
import Navbar from "./modules/layout/components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mobile from "./modules/products/Mobile";
import Laptop from "./modules/products/Laptop";
import Watches from "./modules/products/Watches";
import Upload from "./modules/products/Upload";
import Login from "./modules/users/Login";
import Register from "./modules/users/Register";
import { Provider } from "react-redux";
import store from "./redux/Store";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/mobiles" component={Mobile} />
            <Route exact path="/watches" component={Watches} />
            <Route exact path="/laptops" component={Laptop} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
