import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../../state/store/configureStore';
const configStore = configureStore();

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import VacanciesOrder from './VacanciesOrder';

configure( { adapter: new Adapter() } );

global.sinon = sinon;
global.expect = chai.expect;
global.shallow = shallow;
global.render = render;
global.mount = mount;


describe('VacanciesOrder component is rendered empty', () => {
    let renderedVacancies;
    beforeEach(() => {
        renderedVacancies = render(<Provider store={configStore}><div><VacanciesOrder/></div></Provider>);
    });

    it('VacanciesOrder component is statically rendered or mounted', () => {
        expect(renderedVacancies.find('h4')).to.have.length(1);
    });
});

describe('VacanciesOrder component is mounted empty', () => {
    let wrapperVacancies;
    beforeEach(() => {
        wrapperVacancies = mount(<Provider store={configStore}><VacanciesOrder/></Provider>);
    });

    it('VacanciesOrder component is statically rendered or mounted - paragraph check', () => {
        expect(wrapperVacancies.find('p')).to.have.length(1);
        expect(wrapperVacancies.find('p').text()).to.equal('Geen geselecteerd vacature');
    });

    it('VacanciesOrder component is statically rendered or mounted - button check', () => {
        expect(wrapperVacancies.find('button')).to.have.length(0);
    });

    afterEach(() => {
        wrapperVacancies.unmount();
    });
});


const initialState = {
    vacanciesState: {
        vacancies: [
            {
                "id": 2,
                "name": "Simple vacature",
                "period": 15,
                "price": 49,
                "discount": 5,
                "image": "simple.png",
                "features": ["15 dagen online", "HBO", "Na plaatsing direct zichtbaar"]
            },
            {
                "id": 3,
                "name": "Standaard vacature",
                "period": 60,
                "price": 99,
                "discount": 10,
                "image": "standard.png",
                "features": ["60 dagen online", "Na plaatsing direct zichtbaar", "Optimaal bereik: LBO/VMBO t/m WO", "Bekijk tot 30 cv's"]
            }
        ],
        selectedVacancy: 2
    }
};

describe('VacanciesOrder component shallow rendered with mock data',()=>{
    const mockStore = configureMockStore([thunk]);
    let store, vacanciesOrderContainer;

    beforeEach(()=>{
        store = mockStore(initialState);
        vacanciesOrderContainer = shallow(<VacanciesOrder store={store} />);
    });

    it('VacanciesOrder component test properties', () => {
        expect(vacanciesOrderContainer.length).to.equal(1);
        expect(vacanciesOrderContainer.prop('vacancyId')).to.equal(initialState.vacanciesState.selectedVacancy);
    });
});


describe('VacanciesOrder component mounted rendered with mock data',()=>{
    const mockStore = configureMockStore([thunk]);
    let store, vacanciesOrderWrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        vacanciesOrderWrapper = mount(<Provider store={store}><VacanciesOrder/></Provider>);
    });

    it('test2', () => {
        expect(vacanciesOrderWrapper.length).to.equal(1);
        expect(vacanciesOrderWrapper.find(VacanciesOrder).find('button').text()).to.equal('Bestellen');
        //expect(vacanciesOrderWrapper.find(VacanciesOrder).props().vacancyId).to.equal(initialState.vacanciesState.selectedVacancy);
    });
});