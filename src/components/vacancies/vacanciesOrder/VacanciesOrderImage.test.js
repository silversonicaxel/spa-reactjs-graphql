import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import chai from 'chai';

import VacanciesOrderImage from './VacanciesOrderImage';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;


describe('VacanciesOrderImage component is mount rendered with some data', () => {
    let wrapperImage;

    beforeEach(() => {
        wrapperImage = mount(<VacanciesOrderImage url="simple.png" type="Simple image"/>);
    });

    it('VacanciesOrderImage component is rendered with some data - html structure', () => {
        expect(wrapperImage.find('.vacancies__image')).to.have.length(1);
        expect(wrapperImage.name()).to.equal('VacanciesOrderImage');
        expect(wrapperImage.find('.vacancies__image').children()).to.have.length(1);
    });

    it('VacanciesOrderImage component is rendered with some data - image detail' , () => {
        expect(wrapperImage.props().url).to.equal("simple.png");
        expect(wrapperImage.props().type).to.equal("Simple image");
    });

    afterEach(() => {
        wrapperImage.unmount();
    });
});

