import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../../state/store/configureStore';
const configStore = configureStore();
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import VacanciesList from './VacanciesList';
import VacanciesListTable from './VacanciesListTable';


configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;


it('VacanciesList component is rendered', () => {
    const wrapperList = mount(
        <Provider store={configStore}>
            <div>
                <VacanciesList/>
            </div>
        </Provider>
    );
    expect(wrapperList.find("h2")).to.have.length(1);
    expect(wrapperList.find("h5")).to.have.length(1);
    expect(wrapperList.find("h2").text()).to.equal("Online vacatures");
    expect(wrapperList.find("h5").text()).to.equal("Introductiepakketten");

    expect(wrapperList.contains(<h3>Introductiepakketten</h3>)).to.equal(false);
    expect(wrapperList.contains(<h5>Introductiepakketten</h5>)).to.equal(true);

    expect(wrapperList.find(VacanciesListTable)).to.have.length(1);
    wrapperList.unmount();
});
