const Menu = ({ nameDish, priceDish, ingrDish, qwer }) => {
    return (
        <>
       <p>Блюдо - {nameDish}</p>
       <p>Цена - {priceDish}</p>
       <p>Ингридиенты - {ingrDish}</p>
       <p>{qwer}</p>
       </>
       
    );
    
};



export default Menu;