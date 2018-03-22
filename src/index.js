import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import './Index.css';
import App from './templates/app/App';
import NotFound from './templates/notFound/NotFound';
import Head from './components/head/Head';
import Header from './components/header/Header';

const apolloClient = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:3001/graphql'}),
    cache: new InMemoryCache()
});

ReactDOM.render((
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
), document.getElementById('root'));
