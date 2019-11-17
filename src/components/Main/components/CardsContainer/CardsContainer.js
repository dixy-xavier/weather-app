import React from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';
import styles from './CardsContainer.css';

const CardsContainer = ({ setPageNo, pageNo, dates, setActiveDate, activeDate, activeScale }) => {
  const isFirstPage = pageNo === 0;
  const data = Object.entries(dates);
  const isLastPage = pageNo * 3 + 3 >= data.length;
  return (
    <div className={styles.wrapper}>
      <Button className={styles.button} disabled={isFirstPage} onClick={() => setPageNo(isFirstPage ? pageNo : pageNo - 1)}>{'<'}</Button>
      <Cards dates={data.slice(pageNo * 3, pageNo * 3 + 3)} onClick={setActiveDate} activeDate={activeDate} activeScale={activeScale} />
      <Button className={styles.button} disabled={isLastPage} onClick={() => setPageNo(isLastPage ? pageNo : pageNo + 1)}>{'>'}</Button>
    </div>
  );
};

export default CardsContainer;
