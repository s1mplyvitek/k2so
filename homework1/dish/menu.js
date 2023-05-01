const Menu = ({ nameDish, priceDish, ingrDish, odin }) => {
    return (
        <>
       <p>Блюдо - {nameDish}</p>
       <p>Цена - {priceDish}</p>
       <p>Ингридиенты - {ingrDish}</p>
       <h1>{odin}</h1>
       </>
       
    );
    
};



export default Menu;