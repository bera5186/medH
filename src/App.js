import React from "react";

import { Route, Switch } from "react-router-dom";

// style
import "./sass/base.scss";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// components
import { Navbar } from "./components/Navbar";
import Pricing from "./components/Pricing";
import ArchiveData from "./components/dashboard/user/ArchiveData";

function App() {
  
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
export default App;
