import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import NotFound from './NotFound';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;


it('NotFound component is rendered', () => {
    const wrapperNotFound = mount(
        <BrowserRouter>
            <Route component={NotFound} />
        </BrowserRouter>
    );
    expect(wrapperNotFound.find('main')).to.be.a('object');
    expect(wrapperNotFound.find('h2').text()).to.equal('Pagina niet gevonden');
    expect(wrapperNotFound.find('p').type()).to.equal('p');

    wrapperNotFound.unmount();
});
