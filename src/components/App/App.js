import React from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Main from './containers/Main/Main';
import styles from './App.css';

/**
 * Outer wrapper component
 * */

const App = () => (
  <div className={styles.wrapper}>
    <MainHeader />
    <Main />
  </div>
);

export default App;
