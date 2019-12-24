import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import NavBar from './components/NavBar';
import AppRouter from './AppRouter';
import { createBrowserHistory } from 'history'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);
