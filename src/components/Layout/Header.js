import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import { HeaderCartButton } from './HeaderCartButton';
import classes from './Header.module.css';

export const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Lunch.ly</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};
