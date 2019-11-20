import { shallow } from 'enzyme';
import React from 'react';
import Image from './Image';

describe('Image component tests', () => {
  const minProps = { src: 'src/assets/images/optile-logo.png' };
  const container = shallow(<Image {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have img dom element', () => {
    expect(container.find('img').length).toEqual(1);
  });

});
