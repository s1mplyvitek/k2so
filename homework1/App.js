import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './components/dish';
import Menu from './components/dish/menu';

function App() {
  let [a, setA] = useState(0);
  let imUr = "https://upload.wikimedia.org/wikipedia/ru/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg";

  let items = [
    {imgSrc: logo, text: "testUP1"},   
    {imgSrc: imUr, text: "testUP4"}
  ];

  let dish = [

    {
        name: 'buuza',
        price: 70,
        expense: 0,
        ingridients: ['meat', 'water', 'solt', 'onion',],
    },

    {
        name: 'blackSoup',
        price: 100,
        expense: 0,
        ingridients: ['meat', 'water', 'solt',],
    },

    {
        name: 'brtuch',
        price: 150,
        expense: 0,
        ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
    }
];



  setInterval(() => {
    setA(++a);
  }, 1000);


  return (
    <div className="App">
      <header className="App-header">
        {items.map((item) => (
          <Image imgSrc={item.imgSrc} text={item.text}/>
        ))}      
        {dish.map((item) => (
          <Menu nameDish={item.name} priceDish={item.price} ingrDish={item.ingridients}/>
        ))}
        
       
        {a} 
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
