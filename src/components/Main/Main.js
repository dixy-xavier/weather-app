import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import CardsContainer from './components/CardsContainer/CardsContainer';
import GraphContainer from './components/GraphContainer/GraphContainer';
import Loader from './components/Loader/Loader';
import NoData from './components/NoData/NoData';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeDate, setActiveDate] = useState(new Date().setHours(0, 0, 0, 0));
  useEffect(() => {
    request(URL).then(res => {
      if (res.cod !== '200') {
        setError(res.message);
      } else {
        setLocation(res.city);
        const groupedDates = groupDates(res.list);
        setDates(groupedDates);
        setActiveDate(Object.keys(groupedDates)[0]);
        setError('')
      }
      setLoading(false);
    });
  }, []);
  const activeScale = scales.find(item => item.active);
  return (
    <main className={styles.wrapper}>
      {loading ? (
        <Loader classes={{ wrapper: styles.loader }} />
      ) : (
        !!error ? (
          <NoData message={error} />
        ) : (
          <Fragment>
            <h2>
              Weather Forecast of {location.name}, {location.country}
            </h2>
            <RadioButtons
              list={scales}
              classes={{ wrapper: styles.radioWrapper }}
              onClick={key => setScales(scales.map(item => ({ ...item, active: item.key === key })))}
            />
            <CardsContainer
              pageNo={pageNo}
              activeDate={activeDate}
              dates={dates}
              setActiveDate={setActiveDate}
              setPageNo={setPageNo}
              activeScale={activeScale.key}
            />
            <GraphContainer
              data={dates[activeDate]}
              labelDetails={{
                label: `Temperature on ${moment(Number(activeDate)).format('DD MMM YYYY')}`,
                name: 'main.temp',
                xKey: 'dt_txt',
                color: '#299928',
              }}
              activeScale={activeScale.key}
            />
          </Fragment>
        )
      )}
    </main>
  );
};

export default Main;
