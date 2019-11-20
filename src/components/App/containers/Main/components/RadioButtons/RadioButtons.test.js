import React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from './RadioButtons';

describe('RadioButtons component tests', () => {
  const minProps = {
    list: [
      {
        key: 'celsius',
        label: 'Celsius',
        active: false,
      },
      {
        key: 'fahrenheit',
        label: 'Fahrenheit',
        active: true,
      },
    ]
  };
  const container = shallow(<RadioButtons {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  const div = container.find('div');
  test('Should have div elements', () => {
    expect(div.length).toEqual(1);
  });

  test('Should have Button component', () => {
    expect(container.find('Button').length).toEqual(minProps.list.length);
  });

});
