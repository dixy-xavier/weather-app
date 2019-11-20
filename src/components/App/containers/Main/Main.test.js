import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import Main from './Main';

describe('Main component tests', () => {
  const initialState = {
    mainApp: {
      location: {},
      dates: {},
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let container = shallow(<Main store={store} />);

  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

});

