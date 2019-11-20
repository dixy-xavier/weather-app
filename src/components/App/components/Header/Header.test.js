import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header component tests', () => {
  const minProps = { headerType: 'h1', title: 'Weather App' };
  const container = shallow(<Header {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have h1', () => {
    expect(container.find('h1').length).toEqual(1);
  });

});
