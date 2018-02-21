import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './state/store/configureStore';
import { Provider } from 'react-redux';

import './Index.css';
import App from './templates/app/App';
import NotFound from './templates/notFound/NotFound';
import Head from './components/head/Head';
import Header from './components/header/Header';

const configStore = configureStore();

ReactDOM.render((
    <Provider store={configStore}>
        <BrowserRouter>
            <div>
                <Head/>
                <Header/>

                <Switch>
                    <Route exact path='/' component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
