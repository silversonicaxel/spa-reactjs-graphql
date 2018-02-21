import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../state/store/configureStore';

import { BrowserRouter, Route } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import chai from 'chai';

import App from './App';

const configStore = configureStore();
configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.render = render;


it('App component is rendered', () => {
    const wrapperApp = render(
        <Provider store={configStore}>
            <BrowserRouter>
                <Route exact path='/' component={App} />
            </BrowserRouter>
        </Provider>
    );
    expect(wrapperApp.find('main')).to.be.a('object');

});
