import React from 'react';

/**
 * Header component
 * */

const Header = ({ headerType, classes = {}, title }) => {
  const H = headerType;
  return (
    <H className={classes.header}>
      {title}
    </H>
  );
};

export default Header;
