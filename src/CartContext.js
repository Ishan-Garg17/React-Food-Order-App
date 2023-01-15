import React from 'react'
import {useReducer} from 'react'


export const CartContext =  React.createContext({
    cartData: [],
    deleteItem: ()=>{},
    addItem: (item)=>{}
});

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
    if(action.type==="ADD"){
        const existingItemIndex = state.items.findIndex(item=>{
            return item.id===action.item.id
        })
        console.log("existingItemIndex",existingItemIndex);
        if(existingItemIndex!==-1){
            // console.log("existingItem",state.items[existingItemIndex]);
            state.items[existingItemIndex].amount+=1
            const updatedAmount = state.totalAmount + state.items[existingItemIndex].price
            // console.log("Amount is",state.items[existingItemIndex].amount);
            const updateItems = [...state.items] 
            return{
                items: updateItems,
                totalAmount: updatedAmount
            };
        }
        const updateItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + action.item.amount*action.item.price
        // we will use concat because push will just add the item to the existing object whereas concat will add and return the new array which is the correct way to update state in react in a immutable way 
        return{
            items: updateItems,
            totalAmount: updatedAmount
        };
    }
    if(action.type==="REMOVE"){
        // const updateItems = state.items this will give us error
        let updateItems = state.items
        const toRemoveItem = updateItems[action.index]
        toRemoveItem.amount-=1
        const updatedAmount = state.totalAmount-toRemoveItem.price
        if(toRemoveItem.amount===0){
            updateItems = state.items.filter((item,index)=>index!==action.index)
        }

        return{
            items: updateItems,
            totalAmount:updatedAmount
        }
    }
    return defaultCartState
}

export const CartContextProvider = (props)=> {
   const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)

  
    const deleteItemFromCart = (index)=>{
        console.log("INDEX IS",index);
        dispatchAction({type:'REMOVE',index:index}) 
    }
  
    const addItemToCart = (item)=>{
        console.log("item to be added is-:",item);
        dispatchAction({type:'ADD',item:item})
    }
    
    const cartCont = {
        cartData: cartState.items,
        totalAmount: cartState.totalAmount,
        deleteItem: deleteItemFromCart,
        addItem: addItemToCart
    }
  
    return (
      <CartContext.Provider value={cartCont}>
          {props.children}
      </CartContext.Provider>
    )
  }
