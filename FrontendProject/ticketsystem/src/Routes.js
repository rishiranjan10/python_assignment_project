import React from "react";

import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import Login from './Pages/Login'
import UserHome from './Pages/UserHome';
import createHistory from 'history/createBrowserHistory';
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminteamLoginPage from './Pages/AdminteamLoginPage'
import AdminTeamHome from "./Pages/AdminTeamHome";
import AdminHome from "./Pages/AdminHome";
import Register from "./Pages/Register";
import CreateTicket from "./Pages/CreateTicket";
import Assignticket from './Pages/AssignTicket'

const history = createHistory({ forceRefresh: true });

const Routes = () => (
    <Router history={history}>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/adminlogin" component={AdminLoginPage} />
        <Route exact path="/adminteamlogin" component={AdminteamLoginPage} />
        <Route exact path="/adminhome" component={AdminHome} />
        <Route exact path="/adminteamhome" component={AdminTeamHome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/createticket" component={CreateTicket} />
        <Route exact path="/assignticket" component={Assignticket} />
    </Router>
);

export default Routes;