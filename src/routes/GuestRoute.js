import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Home from "../pages/home";



function GuestRoute({element : Component, ...rest  }){
    const account = useSelector(state => state.account);
    const isAuthenticated = Boolean(account.user);

    return (
        <Route {...rest} element={(
            isAuthenticated
            ? <Home />
            : Component

        )} ></Route>
    )
}

export default GuestRoute;