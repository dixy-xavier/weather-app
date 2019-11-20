import React from 'react';
import { shallow } from 'enzyme';
import MainHeader from './MainHeader';

describe('MainHeader component tests', () => {
  const container = shallow(<MainHeader />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have header element', () => {
    expect(container.find('header').length).toEqual(1);
  });

  test('Should have Header component', () => {
    expect(container.find('Header').length).toEqual(1);
  });

  test('Should have Image component', () => {
    expect(container.find('Image').length).toEqual(1);
  });
});
