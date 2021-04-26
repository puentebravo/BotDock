import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Directory from "./pages/Directory";
import NavBar from "./components/NavBar";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  withAuthenticator,
  AmplifySignIn,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <AmplifyAuthenticator usernameAlias="email">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        
          <Route exact path="/" component={AmplifySignIn} />

          <Route exact path="/Directory" component={Directory} />

          <Route exact path="/Contact" component={Contact} />
      </BrowserRouter>
      </AmplifyAuthenticator>
    );
  }
}

Amplify.configure(awsconfig);

export default withAuthenticator(App);

