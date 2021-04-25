import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Directory from "./pages/Directory"
import NavBar from "./components/NavBar"
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {AmplifySignOut } from "@aws-amplify/ui-react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/Directory" component={Directory} />
        </Switch>
        <Switch>
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <AmplifySignOut />
      </BrowserRouter>
    )
  }
}

Amplify.configure(awsconfig);

//export default withAuthenticator(App);
export default App;