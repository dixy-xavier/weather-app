import classNames from 'classnames';
import React from 'react';
import styles from './Button.css';

/**
 * Button component
 * */

const Button = ({ className, children, onClick }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>{children}</button>
);

export default Button;
