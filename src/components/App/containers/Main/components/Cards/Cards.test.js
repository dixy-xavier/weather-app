import { shallow } from 'enzyme';
import React from 'react';
import Cards from './Cards';

describe('Cards component tests', () => {
  const minProps = {
    dates: [
      [
        '1574188200000',
        [
          Object,
        ],
      ],
      [
        '1574274600000',
        [
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
        ],
      ],
      [
        '1574361000000',
        [
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
          Object,
        ],
      ],
    ],
  };
  const container = shallow(<Cards {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have section element', () => {
    expect(container.find('section').length).toEqual(1);
  });

  test('Should have Card component', () => {
    expect(container.find('Card').length).toEqual(3);
  });

});
