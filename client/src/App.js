import React, { Component, useState, useEffect, } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Directory from "./pages/Directory";
import NavBar from "./components/NavBar";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AuthState, } from "@aws-amplify/ui-components";
import {
  withAuthenticator,
  AmplifySignIn,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
//import logo from './logo.svg';
import "./App.css";

Amplify.configure(awsconfig);

const handleAuthStateChange = ((nextAuthState) => {
  if (nextAuthState === AuthState.SignedIn) {
    window.location.href = ("/Directory")
  }
})

function App() {
  //  const [Auth, setAuth] = useState();

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   if (Auth === AuthState.SignedIn) {
  //     window.location.href = ("/Directory")
  //   }
  // }, []);
  // const handleAuthStateChange = (nextAuthState) =>{
  //   if (nextAuthState === AuthState.SignedIn) {
  //     setAuth(nextAuthState)
  //   }
  // }
  
    return (
      <AmplifyAuthenticator handleAuthStateChange={handleAuthStateChange} >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        
          <Route exact path="/" component={AmplifySignIn} />

          <Route exact path="/Directory" component={Directory} />
          <Route exact path="/Contact" component={Contact} />
      </BrowserRouter>
      </AmplifyAuthenticator>
    );
  
}




export default withAuthenticator(App);

