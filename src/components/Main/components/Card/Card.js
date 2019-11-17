import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { convertTemperature } from '../../Main.utils';
import LabelValue from '../LabelValue/LabelValue';
import styles from './Card.css';

const Card = ({ date, reports, onClick, isActive, activeScale }) => {
  const avgTemperature = (reports.reduce((acc, report) => acc + report.main.temp, 0) / reports.length).toFixed(2);
  return (
    <div className={classNames(styles.wrapper, { [styles.active]: isActive })} onClick={() => onClick(date)}>
      <LabelValue label="Date" value={moment(Number(date)).format('DD MMM YYYY')} />
      <LabelValue label="Temperature" value={convertTemperature(avgTemperature, activeScale)} />
    </div>
  );
};

export default Card;
