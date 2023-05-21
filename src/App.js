import { useState } from 'react';
import Menu from './pages/MenuPage';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CartWidget from './components/CartWidget';
import CartProvider from './components/providers/CartProvider';


function App() {


  return (
    <div className="p-3 ">
      <CartProvider>
        <CartWidget />
      </CartProvider>      
      <MainMenu />
      <Outlet></Outlet>
      {/* <Menu onItemBuy={(item => addCart(item))}></Menu> */}
    </div>
  );
}

export default App;
