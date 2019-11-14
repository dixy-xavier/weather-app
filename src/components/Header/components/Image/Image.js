import classNames from 'classnames';
import React from 'react';
import styles from './Image.css';

const Image = ({ alt = '', className, ...props }) => (
  <img alt={alt} className={classNames(styles.image, className)} {...props} />
);

export default Image;
