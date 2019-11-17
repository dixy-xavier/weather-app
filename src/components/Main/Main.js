import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Cards from './components/Cards/Cards';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { temperatureScales } from './Main.constants';
import styles from './Main.css';
import { groupDates, request, URL } from './Main.utils';

/**
 * Main component with radio buttons and content
 * */

const Main = () => {
  const [scales, setScales] = useState(temperatureScales);
  const [location, setLocation] = useState({});
  const [dates, setDates] = useState({});
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    request(URL).then(res => {
      setLocation(res.city);
      setDates(groupDates(res.list));
    })
  }, []);
  return (
    <main className={styles.wrapper}>
      <RadioButtons
        list={scales}
        classes={{ wrapper: styles.radioWrapper }}
        onClick={key => setScales(scales.map(item => ({ ...item, active: item.key === key })))}
      />
      <Button onClick={() => setPageNo(pageNo === 0 ? pageNo : pageNo - 1)}>{'<'}</Button>
      <Cards dates={Object.entries(dates).slice(pageNo * 3, pageNo * 3 + 3)} />
      <Button onClick={() => setPageNo(pageNo === dates.length - 1 ? pageNo : pageNo + 1)}>{'>'}</Button>
    </main>
  );
};

export default Main;
