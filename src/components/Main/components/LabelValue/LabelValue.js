import React from 'react';
import styles from './LabelValue.css';

const LabelValue = ({ label, value }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <div className={styles.value}>{value}</div>
  </div>
);

export default LabelValue;
