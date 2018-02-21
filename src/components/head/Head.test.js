import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';
import chai from 'chai';

import Head from './Head';

configure( { adapter: new Adapter() } );

global.expect = chai.expect;
global.render = render;

it('Head tag is rendered', () => {
    const renderedHead = render(<Head/>);
    expect(renderedHead.find("meta")).to.be.a("object");
});
