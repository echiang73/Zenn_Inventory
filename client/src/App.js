import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import ProductDetail from "./pages/ProductDetail";
import Channels from "./pages/Channels";
import Support from "./pages/Support";
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router>
      <div>
       <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/channels" component={Channels} />
          <Route exact path="/support" component={Support} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

