import React from 'react';
import Image from './components/Image/Image';
import styles from './Header.css';

const Header = () => (
  <div className={styles.wrapper}>
    <Image alt="Optile logo" className={styles.image} src="/src/assets/images/optile-logo.png" />
    <h1 className={styles.header}>Weather App</h1>
  </div>
);

export default Header;
