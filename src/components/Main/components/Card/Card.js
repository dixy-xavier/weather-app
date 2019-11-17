import { WiHumidity, WiStrongWind } from "react-icons/wi";
import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { convertTemperature } from '../../Main.utils';
import LabelValue from '../LabelValue/LabelValue';
import styles from './Card.css';

const Card = ({ date, reports, onClick, isActive, activeScale }) => {
  const count = reports.length;
  const avgValues = reports.reduce((acc, report, index) => {
    const data = {
      temperature: acc.temperature + report.main.temp,
      humidity: acc.humidity + report.main.humidity,
      wind: acc.wind + report.wind.speed,
    };
    if (index === count - 1) {
      return {
        temperature: (data.temperature / count).toFixed(2),
        humidity: (data.humidity / count).toFixed(2),
        wind: (data.wind / count).toFixed(2),
      }
    }
    return data;
  }, { temperature: 0, humidity: 0, wind: 0 });
  return (
    <div className={classNames(styles.wrapper, { [styles.active]: isActive })} onClick={() => onClick(date)}>
      <div className={styles.labelWrapper}>
        <div className={styles.date}>{moment(Number(date)).format('DD MMM YYYY')}</div>
        <div className={styles.temperature}>{convertTemperature(avgValues.temperature, activeScale)}</div>
      </div>
      <div className={styles.labelWrapper}>
        <LabelValue label="Humidity" value={`${avgValues.humidity} %`} icon={<WiHumidity />} />
        <LabelValue label="Wind" value={`${avgValues.wind} m/s`} icon={<WiStrongWind />} />
      </div>
    </div>
  );
};

export default Card;
