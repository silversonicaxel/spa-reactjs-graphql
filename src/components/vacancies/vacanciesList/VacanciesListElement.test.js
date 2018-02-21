import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../../state/store/configureStore';
const configStore = configureStore();
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import VacanciesListElement from './VacanciesListElement';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;


it('VacanciesListElement component is rendered', () => {
    const wrapperElement = mount(<Provider store={configStore}><div><VacanciesListElement id={23} name="Test" discount={5} price={40} total={45}/></div></Provider>);
    expect(wrapperElement.find("li")).to.have.length(1);
    expect(wrapperElement.find(".vacancies__elementprice").text()).to.equal("€ 40");

    wrapperElement.find("li").simulate("click");
    wrapperElement.unmount();
});
