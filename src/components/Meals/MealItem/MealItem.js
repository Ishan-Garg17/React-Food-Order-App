import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import {CartContext} from '../../../CartContext';

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const onAdd=(amount)=>{
    console.log(props.id);
    ctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price //not taking price as it is a string, we will pass Number only and then will convert that number into string
    })
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={onAdd} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;