import React from 'react';
import styles from './LabelValue.css';

const LabelValue = ({ label, value, icon }) => (
  <div className={styles.wrapper}>
    <div className={styles.labelWrapper}>
      <label className={styles.label}>{label}</label>
      {icon}
    </div>
    <div className={styles.value}>{value}</div>
  </div>
);

export default LabelValue;
