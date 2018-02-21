import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import VacanciesOrderPrice from './VacanciesOrderPrice';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;

describe('VacanciesOrderPrice component is mount rendered with no data', () => {
    let wrapperPrice;

    beforeEach(() => {
        wrapperPrice = mount(<VacanciesOrderPrice/>);
    });

    it('VacanciesOrderPrice component is rendered with no data - html structure', () => {
        expect(wrapperPrice.find('.vacancies__prices')).to.have.length(1);
        expect(wrapperPrice.find('div.clearfix').hasClass('clearfix')).to.equal(true);

    });

    it('VacanciesOrderPrice component is rendered with no data - costs', () => {
        expect(wrapperPrice.props().price).to.equal(0);
        expect(wrapperPrice.props().discount).to.equal(0);
    });

    afterEach(() => {
        wrapperPrice.unmount();
    });
});


describe('VacanciesOrderPrice component is mount rendered with some data', () => {
    let wrapperPrice;

    beforeEach(() => {
        wrapperPrice = mount(<VacanciesOrderPrice price={100} discount={10} total={90}/>);
    });

    it('VacanciesOrderPrice component is rendered with some data - bold html tags', () => {
        expect(wrapperPrice.find('.vacancies__prices--bold')).to.have.length(2);
    });

    it('VacanciesOrderPrice component is rendered with some data - costs' , () => {
        expect(wrapperPrice.props().price).to.equal(100);
        expect(wrapperPrice.find('.vacancies__priceslabel')).to.have.length(3);
        expect(wrapperPrice.find('.vacancies__priceslabel').first().text()).to.equal('Prijs');
        expect(wrapperPrice.find('.vacancies__pricesamount').first().text()).to.equal('100 €');
        expect(wrapperPrice.props().discount).to.equal(10);

        const wrapperCosts = wrapperPrice.find('.vacancies__pricesamount').map(node => node.text());
        expect(wrapperCosts).to.eql(['100 €', '- 10 €', '90 €']);
    });

    afterEach(() => {
        wrapperPrice.unmount();
    });
});

