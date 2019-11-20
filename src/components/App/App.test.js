import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  const container = shallow(<App />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  test('Should have MainHeader component', () => {
    expect(container.find('MainHeader').length).toEqual(1);
  });

  test('Should have connected Main component', () => {
    expect(container.find('Connect(Main)').length).toEqual(1);
  });

});
