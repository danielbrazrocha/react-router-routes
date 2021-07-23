import React from "react";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import { BrowserRouter, Switch } from "react-router-dom";
import { LoginProvider } from "./Contexts/LoginContext";

const App = () => {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} exact path="/" component={HomePage} />
          <PublicRoute restricted={true} exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/landing" component={LandingPage} />
          <AdminRoute path="/dashboard" component={DashboardPage} />
          {/* children alternative works too */}
          {/* <AdminRoute path="/dashboard" children={<DashboardPage />} />   */}
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
};

export default App;
