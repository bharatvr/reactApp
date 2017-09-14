import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './layout/Layout';
import Login from './account/login/Login';
import HelloWorld from './../containers/HelloWorld'

const Root = ( { store } ) => (
    
    <Provider store= { store } >
        <Router history={browserHistory}>
            <Route path="/layout" component={Layout}>
                <Route path="/" component={Login} />
                <Route path="/account" component={Login} />
                <Route path="/userInfo" component={HelloWorld} />
            </Route>
        </Router>
    </Provider >
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;