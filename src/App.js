import {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './CartContext';
// import CartContext from './CartContext';

function App() {
  const [viewCart, setViewCart] = useState(false);
  return (
    <CartContextProvider>
      {viewCart && <Cart setViewCart={setViewCart}/>}
      <Header setViewCart={setViewCart}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;