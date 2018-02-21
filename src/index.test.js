import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './state/store/configureStore';
const configStore = configureStore();

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
configure( { adapter: new Adapter() } );

global.sinon = sinon;
global.expect = chai.expect;
global.shallow = shallow;
global.render = render;
global.mount = mount;


it('App component is rendered', () => {
    /*
    const wrapperProject = render(
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
    );
    */

    /* const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    global.document.getElementById = (id) => id ==='root' && div;
    expect(ReactDOM.render).toHaveBeenCalledWith(); */
});
