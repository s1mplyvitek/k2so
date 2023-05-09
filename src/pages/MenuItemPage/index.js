import { useParams } from "react-router-dom";
import dish from "../../fake/menu";


const MenuItemPage = () => {
    const { id } = useParams();
    let menuItem = dish.find((item) => item.id == id)
    return (
        <>
            <h1>{menuItem.name}</h1>
            <img src={menuItem.image}></img>
            <p>{menuItem.ingridients.join(", ")}</p>
        </>
    );
};

export default MenuItemPage;