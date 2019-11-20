import { shallow } from 'enzyme';
import React from 'react';
import BarChartCard, { CustomizedLabel, Label } from './BarChartCard';

describe('BarChartCard component tests', () => {
  const minProps = {
    labelDetails: {
      label: 'Temperature on 20 Nov 2019 (in Fahrenheit)',
      name: 'main.temp',
      xKey: 'dt_txt',
      color: '#299928',
    },
    data: [
      {},
      {},
    ],
    activeScale: 'fahrenheit',
  };
  const container = shallow(<BarChartCard {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  test('Should have Label component and match props', () => {
    const component = container.find('Label');
    expect(component.length).toEqual(1);
    expect(component.prop('label')).toEqual(minProps.labelDetails.label);
  });

  test('Should have BarChart component and match props', () => {
    const component = container.find('BarChart');
    expect(component.length).toEqual(1);
    expect(component.prop('data')).toEqual(minProps.data);
  });

  test('Should have XAxis component and match props', () => {
    const component = container.find('XAxis');
    expect(component.length).toEqual(1);
    expect(component.prop('dataKey')).toEqual(minProps.labelDetails.xKey);
  });

  test('Should have YAxis component and match props', () => {
    const component = container.find('YAxis');
    expect(component.length).toEqual(1);
    expect(component.prop('hide')).toEqual(true);
  });

  test('Should have Bar component and match props', () => {
    const component = container.find('Bar');
    expect(component.length).toEqual(1);
    expect(component.prop('dataKey')).toEqual(minProps.labelDetails.name);
  });

  test('Should have Cell component and match props', () => {
    const component = container.find('Cell');
    expect(component.length).toEqual(minProps.data.length);
    expect(component.first().prop('fill')).toEqual(minProps.labelDetails.color);
  });
});

describe('CustomizedLabel component tests', () => {
  const minProps = { activeScale: 'fahrenheit' };
  const container = shallow(<CustomizedLabel {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have text', () => {
    expect(container.find('text').length).toEqual(1);
  });

});

describe('Label component tests', () => {
  const minProps = { label: 'test' };
  const container = shallow(<Label {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have div', () => {
    const div = container.find('div');
    expect(div.length).toEqual(1);
    expect(div.prop('children')).toEqual(minProps.label);
  });

});
