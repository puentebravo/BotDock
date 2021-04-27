import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Directory from "./pages/Directory";
import NavBar from "./components/NavBar";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import {
  withAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Route exact path="/" component={Directory} />
        <Route exact path="/Contact" component={Contact} />
      </BrowserRouter>
      <AmplifySignOut  />
    </AmplifyAuthenticator>
  );
}

export default withAuthenticator(App);
