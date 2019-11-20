import React from 'react';
import { shallow } from 'enzyme';
import GraphContainer from './GraphContainer';

describe('GraphContainer component tests', () => {
  const container = shallow(<GraphContainer />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have section element', () => {
    expect(container.find('section').length).toEqual(1);
  });

  test('Should have BarChartCard component', () => {
    expect(container.find('BarChartCard').length).toEqual(1);
  });

});
