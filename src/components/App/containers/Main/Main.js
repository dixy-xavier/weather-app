import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CardsContainer from './components/CardsContainer/CardsContainer';
import GraphContainer from './components/GraphContainer/GraphContainer';
import Loader from './components/Loader/Loader';
import NoData from './components/NoData/NoData';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { getWeatherForecast, leaveWeatherForecast } from './Main.actions';
import { temperatureScales } from './Main.constants';
import styles from './Main.css';

/**
 * Main component with radio buttons and content
 * */

export const Main = ({ dispatch, location, dates }) => {
  const [scales, setScales] = useState(temperatureScales);
  const [pageNo, setPageNo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeDate, setActiveDate] = useState(new Date().setHours(0, 0, 0, 0));
  const activeScale = scales.find(item => item.active);

  useEffect(() => {
    dispatch(getWeatherForecast({
      successCb: date => {
        setActiveDate(date);
        setLoading(false);
      },
      errorCb: message => {
        setError(message);
        setLoading(false);
      },
    }));
    return () => dispatch(leaveWeatherForecast());
  }, []);

  return (
    <main className={styles.wrapper}>
      {loading ? (
        <Loader classes={{ wrapper: styles.loader }} />
      ) : (
        !!error ? (
          <NoData message={error} />
        ) : (
          <Fragment>
            <Header
              classes={{ header: styles.header }}
              title={`Weather Forecast of ${location.name}, ${location.country}`}
              headerType="h2"
            />
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
                label: `Temperature on ${moment(Number(activeDate)).format('DD MMM YYYY')} (in ${activeScale.label})`,
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

const mapStateToProps = state => {
  return {
    location: state.mainApp.location,
    dates: state.mainApp.dates,
  };
};

export default connect(mapStateToProps)(Main);
