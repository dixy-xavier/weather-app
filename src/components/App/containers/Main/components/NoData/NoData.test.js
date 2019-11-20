import React from 'react';
import { shallow } from 'enzyme';
import NoData from './NoData';

describe('NoData component tests', () => {
  const container = shallow(<NoData message="No Data" />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  const div = container.find('div');
  test('Should have div elements', () => {
    expect(div.length).toEqual(1);
  });

  test('Label element should have proper children', () => {
    expect(div.prop('children')).toEqual('No Data');
  });

});
