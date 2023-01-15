import {useRef } from 'react';
// import CartContext from '../../../CartContext';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({id,onAdd}) => {
  const inputRef = useRef()
  // const onAdd=  props.onAdd
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    // console.log(e.target);
    // console.log(inputRef.current.value);
    onAdd(Number(inputRef.current.value))
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        label='Amount'
        ref={inputRef}
        input={{
          // id: 'amount_', this will make all label to point at same input only
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;