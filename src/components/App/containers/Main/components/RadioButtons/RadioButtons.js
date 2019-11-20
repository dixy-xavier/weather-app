import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import styles from './RadioButtons.css';

/**
 * Radio buttons
 * */

const RadioButtons = ({ list, classes = {}, onClick }) => (
  <div className={classNames(styles.wrapper, classes.wrapper)}>
    {list.map(item => (
      <Button
        key={item.key}
        className={classNames(styles.button, { [styles.active]: item.active })}
        onClick={() => onClick(item.key)}
      >
        {item.label}
      </Button>
    ))}
  </div>
);

export default RadioButtons;
