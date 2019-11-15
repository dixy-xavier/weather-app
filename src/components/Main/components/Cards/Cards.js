import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.css';

const Cards = ({ reports }) => (
  <section className={styles.wrapper}>
    {reports.map(report => (
      <Card key={report} report={report} />
    ))}
  </section>
);

export default Cards;
