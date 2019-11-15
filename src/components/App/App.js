import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.css';

/**
 * Outer wrapper component
 * */

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <Main />
  </div>
);

export default App;
