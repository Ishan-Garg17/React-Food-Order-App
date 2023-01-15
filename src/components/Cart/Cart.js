import { useContext } from 'react';
import {CartContext} from '../../CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({setViewCart}) => {
  const ctx = useContext(CartContext);
  console.log("CartData",ctx.cartData);
  // console.log("Cart Component Re-Rendered");
  const removeHandler = (index)=>{
    console.log(index);
    ctx.deleteItem(index)
  }
  const addHandler = (item)=>{
    ctx.addItem(item)
  }
  return (
    <Modal onClose={setViewCart}>
      <ul className={classes['cart-items']}>
      {ctx.cartData.map((item,index) => (
        <CartItem key={item.id}
        item={item}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price} onRemove={removeHandler.bind(null,index)} onAdd={addHandler}/>
      ))}
    </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>setViewCart(false)} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;