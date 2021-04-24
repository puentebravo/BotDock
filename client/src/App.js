import React, { Component } from "react";
import { BrowserRouter, Route,  } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Directory from "./pages/Directory"
import NavBar from "./components/NavBar"
import Amplify from "aws-amplify";
import Register from "./pages/Registration"
import awsconfig from "./aws-exports";
import {AmplifySignOut } from "@aws-amplify/ui-react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        
        <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />

          <Route exact path="/Directory" component={Directory} />

          <Route exact path="/Contact" component={Contact} />

        <AmplifySignOut />
      </BrowserRouter>
    )
  }
}

Amplify.configure(awsconfig);

//export default withAuthenticator(App);
export default App;
