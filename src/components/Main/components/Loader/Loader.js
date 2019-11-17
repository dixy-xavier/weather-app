import classNames from 'classnames';
import React from 'react';
import styles from './Loader.css';

const Loader = ({ classes = {} }) => (
  <div className={classNames(styles.wrapper, classes.wrapper)}>
    <div className={classNames(styles.loaderContent, classes.loaderContent)}>
      <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
          <circle
            className={styles.path}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Loader;
