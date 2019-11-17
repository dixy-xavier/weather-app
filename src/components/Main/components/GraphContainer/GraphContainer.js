import React from 'react';
import BarChartCard from '../BarChartCard/BarChartCard';
import styles from './GraphContainer.css';

const GraphContainer = ({ labelDetails, data }) => (
  <section className={styles.wrapper}>
    <BarChartCard labelDetails={labelDetails} data={data} />
  </section>
);

export default GraphContainer;
