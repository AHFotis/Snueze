import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Header from "./components/Header";
import MyBed from "./pages/MyBed";
import Survey from "./pages/Survey";
import Journal from "./pages/Journal";
import Stats from "./pages/Stats";
import Tools from "./pages/Tools";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import NoMatch from "./pages/NoMatch";
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './context/AuthContext'
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/mybed">
            <MyBed />
          </Route>
          <Route exact path="/survey">
            <Survey />
          </Route>
          <Route exact path="/journal">
            <Journal />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/tools">
            <Tools />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </AuthContextProvider>
  )
}

export default App;


