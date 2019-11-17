import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.css';

const Cards = ({ dates, onClick, activeDate, activeScale }) => (
  <section className={styles.wrapper}>
    {dates.map(([date, reports]) => (
      <Card key={date} date={date} reports={reports} onClick={onClick} isActive={activeDate === date} activeScale={activeScale} />
    ))}
  </section>
);

export default Cards;
