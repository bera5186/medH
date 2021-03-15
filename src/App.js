import React from "react";

import { Route, Switch } from "react-router-dom";

// style
import "./sass/base.scss";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";

// 3rd party
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "./components/AuthNav";
import Doc from "./components/dashboard/user/Doc";

function App() {
  
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)

  return (
    <>
      {
        isAuthenticated === true ? <AuthNav /> : <Navbar />
      }
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exec path={'/dashboard/:docid'}>
            <Doc />
        </Route>
      </Switch>
    </>
  );
}
export default App;
