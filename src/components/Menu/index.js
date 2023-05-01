import DishCard from "./DishCard";


const Menu = ({onItemBuy}) => {

    let dish = [

        {
            name: 'Buuzas',
            price: 70,
            expense: 0,
            ingridients: ['meat', 'water', 'solt', 'onion', 'dough',],
            image: "/content/buuza.webp",
        },

        {
            name: 'Shulen',
            price: 100,
            expense: 0,
            ingridients: ['meat', 'water', 'solt',],
            image: "/content/shulen.jpg",
        },

        {
            name: 'Brtuch',
            price: 150,
            expense: 0,
            ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
            image: "/content/brtuch.png",
        },

        {
            name: 'Classic salad',
            price: 60,
            expense: 0,
            ingridients: ['salad', 'onion', 'solt', 'cucmber', 'tomato'],
            image: "/content/salat.jpg",
        },

        {
            name: 'Cofee',
            price: 50,
            expense: 0,
            ingridients: ['water', 'sugar', 'coffee'],
            image: "/content/coffee.jpg",
        },

        {
            name: 'Tea',
            price: 40,
            expense: 0,
            ingridients: ['tea', 'water', 'milk'],
            image: "/content/tea.webp",
        },
    ];

    return (
    <div className="mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {dish.map((item) => (
            <DishCard item={item} onClickBuy={onItemBuy} />
        ))}       
    </div>
    );
};

export default Menu;