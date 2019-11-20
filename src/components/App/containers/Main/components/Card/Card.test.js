import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component tests', () => {
  const container = shallow(<Card />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div element', () => {
    expect(container.find('div').length).toEqual(5);
  });

  test('Should have span element', () => {
    expect(container.find('span').length).toEqual(1);
  });

  test('Should have LabelValue component', () => {
    expect(container.find('LabelValue').length).toEqual(2);
  });

});
