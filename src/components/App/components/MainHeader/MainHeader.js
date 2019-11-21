import React from 'react';
import Header from '../Header/Header';
import Image from './components/Image/Image';
import styles from './MainHeader.css';
import img from '../../../../assets/images/optile-logo.png';

/**
 * Header component with Optile logo and main heading
 * */

const MainHeader = () => (
  <header className={styles.wrapper}>
    <Header classes={{ header: styles.header }} title="Weather App" headerType="h1" />
    <Image alt="Optile logo" className={styles.image} src={img} />
  </header>
);

export default MainHeader;
