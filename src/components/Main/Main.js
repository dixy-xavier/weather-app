import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Cards from './components/Cards/Cards';
import GraphContainer from './components/GraphContainer/GraphContainer';
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
  const [activeDate, setActiveDate] = useState(new Date().setHours(0, 0, 0, 0));
  useEffect(() => {
    request(URL).then(res => {
      setLocation(res.city);
      const groupedDates = groupDates(res.list);
      setDates(groupedDates);
      setActiveDate(Object.keys(groupedDates)[0])
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
      <Cards dates={Object.entries(dates).slice(pageNo * 3, pageNo * 3 + 3)} onClick={setActiveDate} activeDate={activeDate} />
      <Button onClick={() => setPageNo(pageNo === dates.length - 1 ? pageNo : pageNo + 1)}>{'>'}</Button>
      <GraphContainer
        data={dates[activeDate]}
        labelDetails={{
          label: 'Temperature',
          name: 'main.temp',
          xKey: 'dt_txt',
          color: '#299928'
        }}
      />
    </main>
  );
};

export default Main;
