import React, { useState } from 'react';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { temperatureScales } from './Main.constants';
import styles from './Main.css';

/**
 * Main component with radio buttons and content
 * */

const Main = () => {
  const [scales, setScales] = useState(temperatureScales);
  return (
    <main className={styles.wrapper}>
      <RadioButtons
        list={scales}
        classes={{ wrapper: styles.radioWrapper }}
        onClick={key => setScales(scales.map(item => ({ ...item, active: item.key === key })))}
      />
    </main>
  );
};

export default Main;
