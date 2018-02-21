import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../state/store/configureStore';
const configStore = configureStore();

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import Vacancies from './Vacancies';

configure( { adapter: new Adapter() } );

global.sinon = sinon;
global.expect = chai.expect;
global.mount = mount;

it('Vacancies component is rendered', () => {
    const wrapperVacancies = mount(
        <Provider store={configStore}>
            <Vacancies/>
        </Provider>
    );
    expect(wrapperVacancies.find('div').first().hasClass('vacancies')).to.equal(true);
});
