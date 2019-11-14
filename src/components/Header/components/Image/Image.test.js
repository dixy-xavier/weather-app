import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image component tests', () => {
  const minProps = { src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg' };
  const container = shallow(<Image {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have img dom element', () => {
    expect(container.find('img').first().length).toEqual(1);
  });

});
