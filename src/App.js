import { useState } from 'react';
import Menu from './components/Menu';


function App() {
  const [cart, setCart] = useState([]);

  const addCart = item => {
    setCart([...cart, item]);
  };



  return (
    <div className="p-3 ">
      <div className='my-5 mx-auto container flex flex-row-reverse text-right'>
        <div>
          <div className='text-xl'>Shopping cart</div>
          <div>Total: {cart.reduce((sum, item) => (sum += item.price), 0)} rub</div>
          <div>Number of goods: {cart.length}</div>
        </div>
      </div>
      <Menu onItemBuy={(item => addCart(item))}></Menu>
    </div>
  );
}

export default App;
