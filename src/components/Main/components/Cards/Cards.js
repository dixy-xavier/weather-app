import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.css';

const Cards = ({ dates }) => (
  <section className={styles.wrapper}>
    {dates.map(([date, reports]) => (
      <Card key={date} date={date} reports={reports} />
    ))}
  </section>
);

export default Cards;
