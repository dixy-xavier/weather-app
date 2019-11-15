import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { temperatureScales } from './Main.constants';
import styles from './Main.css';
import { request, url } from './Main.utils';

/**
 * Main component with radio buttons and content
 * */

const Main = () => {
  const [scales, setScales] = useState(temperatureScales);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    request(url).then(res => setRecords(res.list))
  }, []);
  return (
    <main className={styles.wrapper}>
      <RadioButtons
        list={scales}
        classes={{ wrapper: styles.radioWrapper }}
        onClick={key => setScales(scales.map(item => ({ ...item, active: item.key === key })))}
      />
      <Cards reports={records} />
    </main>
  );
};

export default Main;
