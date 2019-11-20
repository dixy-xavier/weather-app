import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button component tests', () => {
  const mockCallBack = jest.fn();
  let container = shallow(<Button />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have button element', () => {
    expect(container.find('button').length).toEqual(1);
  });

  test('Event handler should work', () => {
    container = shallow(<Button onClick={mockCallBack} />);
    container.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test('Children should match', () => {
    container = shallow(<Button>Ok!</Button>);
    expect(container.prop('children')).toEqual('Ok!');
  });

  test('Should have disabled the button', () => {
    container = shallow(<Button disabled />);
    expect(container.prop('disabled')).toEqual(true);
  });

});
