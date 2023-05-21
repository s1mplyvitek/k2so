import DishCard from "../../components/MenuCart";
import dish from "../../fake/menu"

const Menu = ({onItemBuy}) => {


    return (
    <div className="mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {dish.map((item) => (
            <DishCard item={item} />
        ))}       
    </div>
    );
};

export default Menu;