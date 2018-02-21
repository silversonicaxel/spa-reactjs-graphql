import React from 'react';
import ReactDOM from 'react-dom';

import VacanciesOrderDetail from './VacanciesOrderDetail';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

import chai from 'chai';
import sinon from 'sinon';

configure( { adapter: new Adapter() } );

global.sinon = sinon;
global.expect = chai.expect;
global.shallow = shallow
global.render = render
global.mount = mount


describe('VacanciesOrderDetail test', () => {
    it('VacanciesOrderDetail component is rendered', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <div>
                <VacanciesOrderDetail/>
            </div>
        ), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('VacanciesOrderDetail detail list tested', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <div>
                <VacanciesOrderDetail details={["element1", "element2", "three"]}/>
            </div>
        ), div);
        ReactDOM.unmountComponentAtNode(div);


        const detailsList = mount(<VacanciesOrderDetail type="Ciao" details={["element1", "element2", "three"]}/>);
        expect(detailsList.find("h5").text()).to.contain("Ciao");
        expect(detailsList.props().type).to.equal("Ciao");
        expect(detailsList.find("h5")).to.have.length(1);
        expect(detailsList.find("li")).to.have.length(3);
        detailsList.unmount();
    });

});