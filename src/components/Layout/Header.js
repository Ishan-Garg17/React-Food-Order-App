import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = ({setViewCart}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton setViewCart={setViewCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;