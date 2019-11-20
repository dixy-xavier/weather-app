import { shallow } from 'enzyme';
import React from 'react';
import LabelValue from './LabelValue';

describe('LabelValue component tests', () => {
  const container = shallow(<LabelValue label='label' value='value' />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div elements', () => {
    expect(container.find('div').length).toEqual(3);
  });

  test('Label element should have proper children', () => {
    expect(container.find('label').prop('children')).toEqual('label');
  });

  test('Last div should have proper children', () => {
    expect(container.find('div').last().prop('children')).toEqual('value');
  });

});
