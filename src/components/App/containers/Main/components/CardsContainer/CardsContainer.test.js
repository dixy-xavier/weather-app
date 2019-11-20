import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from './CardsContainer';

describe('CardsContainer component tests', () => {
  const container = shallow(<CardsContainer />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div element', () => {
    expect(container.find('div').length).toEqual(1);
  });

  test('Should have Button component', () => {
    expect(container.find('Button').length).toEqual(2);
  });

  test('Should have Cards component', () => {
    expect(container.find('Cards').length).toEqual(1);
  });

  test('Should have FaArrowLeft element', () => {
    expect(container.find('FaArrowLeft').length).toEqual(1);
  });

  test('Should have FaArrowRight element', () => {
    expect(container.find('FaArrowRight').length).toEqual(1);
  });

});
