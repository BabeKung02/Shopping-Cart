import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity : 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow}/>

      {
        showCart ?
          <Cart cart={cart}/> : <Products addToCart={addToCart}/>
      }


    </div>
  );
}

export default App;