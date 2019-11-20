import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader component tests', () => {
  const container = shallow(<Loader />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div elements', () => {
    expect(container.find('div').length).toEqual(3);
  });

  const lastDiv = container.find('div').last();
  const svg = lastDiv.find('svg');
  test('Last div should have an svg', () => {
    expect(container.find('svg').length).toEqual(1);
    expect(svg.length).toEqual(1);
  });

  test('Last div should have an svg', () => {
    expect(container.find('circle').length).toEqual(1);
    expect(svg.find('circle').length).toEqual(1);
  });

});
