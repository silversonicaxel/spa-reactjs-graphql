import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import Header from './Header';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;

it('Header component is rendered', () => {
    const wrapperHeader = mount(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    expect(wrapperHeader.find('header')).to.have.length(1);
    expect(wrapperHeader.find('header').hasClass('header')).to.equal(true);
    expect(wrapperHeader.find('a')).to.have.length(1);
    wrapperHeader.find('a').simulate('click');


    expect(wrapperHeader.find('img')).to.have.length(1);
    expect(wrapperHeader.find('img').parent().is('a')).to.equal(true);
});
