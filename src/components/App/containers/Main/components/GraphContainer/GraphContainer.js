import React from 'react';
import BarChartCard from '../BarChartCard/BarChartCard';
import styles from './GraphContainer.css';

const GraphContainer = props => (
  <section className={styles.wrapper}>
    <BarChartCard {...props} />
  </section>
);

export default GraphContainer;
