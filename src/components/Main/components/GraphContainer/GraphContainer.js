import React from 'react';
import BarChartCard from '../BarChartCard/BarChartCard';
import styles from './GraphContainer.css';

const GraphContainer = ({ labelDetails, data, activeScale }) => (
  <section className={styles.wrapper}>
    <BarChartCard labelDetails={labelDetails} data={data} activeScale={activeScale} />
  </section>
);

export default GraphContainer;
