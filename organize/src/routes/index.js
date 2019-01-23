import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ))
        }
    />
);

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/lancamentos" component={Transactions} />

        <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
);

export default Routes;
