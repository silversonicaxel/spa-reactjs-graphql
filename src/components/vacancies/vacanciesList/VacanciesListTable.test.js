import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import chai from 'chai';

import VacanciesListTable from './VacanciesListTable';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.mount = mount;
global.shallow = shallow;


describe('VacanciesListTable component is rendered', () => {
    it('VacanciesListTable component is rendered empty', () => {
        const wrapperListTable = mount(<VacanciesListTable table={null}/>);
        expect(wrapperListTable.find('p')).to.have.length(1);
        expect(wrapperListTable.find('p').text()).to.equal('Geen beschikbaar vacatures');
        wrapperListTable.unmount();
    });


    it('VacanciesListTable component is rendered with data', () => {
        const firstRow = {
            id: 2,
            name: '2 x Standaard vacature',
            period: 60,
            price: 169,
            discount: 40,
            finalPrice: 129,
            image: 'standard2.png',
            features: ['60 dagen online', 'Na plaatsing direct zichtbaar', 'Optimaal bereik: LBO/VMBO', 'Onbeperkt zoeken', 'Bekijk tot 60 cvs']
        };
        const secondRow = {
            id: 3,
            name: '3 x Standaard vacature',
            period: 6,
            price: 16,
            discount: 4,
            finalPrice: 12,
            image: 'standard3.png',
            features: ['Na plaatsing direct zichtbaar', 'Optimaal bereik: LBO/VMBO', 'Onbeperkt zoeken', 'Bekijk tot 60 cvs']
        };

        const wrapperListTable = shallow(<VacanciesListTable table={[firstRow, secondRow]}/>);
        expect(wrapperListTable.find('form')).to.have.length(1);
        expect(wrapperListTable.find('ul')).to.have.length(1);
        expect(wrapperListTable.find('p')).to.have.length(0);

        expect(wrapperListTable.find('form').closest('.vacancies__headerlong')).to.have.length(1);
        expect(wrapperListTable.find('.vacancies__headersuperlong').exists()).to.equal(false);

        const shortHeadersTexts = wrapperListTable.find('.vacancies__headershort').map(node => node.text());
        expect(shortHeadersTexts).to.eql(['Periode', 'Normale prijs', 'Prijs']);

        wrapperListTable.unmount();
    });
});
