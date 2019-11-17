import moment from 'moment';
import React from 'react';
import LabelValue from '../LabelValue/LabelValue';
import styles from './Card.css';

const Card = ({ date, reports }) => {
  const avgTemperature = (reports.reduce((acc, report) => acc + report.main.temp, 0) / reports.length).toFixed(2);
  return (
    <div className={styles.wrapper}>
      <LabelValue label="Date" value={moment(Number(date)).format('DD MMM YYYY')} />
      <LabelValue label="Temperature" value={avgTemperature} />
    </div>
  );
};

export default Card;
