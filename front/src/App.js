import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalContext } from "./conext/GlobalState";
import NavBar from "./components/NavBar";
import AddTrans from "./components/AddTrans";
import TransHistory from "./components/TransHistory";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import PageNotFound from "./components/PageNotFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const { loadUser, isAuthenticated } = useContext(GlobalContext);
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          {isAuthenticated && <NavBar />}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/addTrans" component={AddTrans} />
            <Route path="/history" component={TransHistory} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
