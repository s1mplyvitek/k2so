import { useDispatch, useSelector } from "react-redux";
import DishCard from "../../components/MenuCart";
import { loadDish } from "../../store/slices/dishSlice";
import { useEffect } from "react";
// import dish from "../../fake/menu"

const Menu = () => {
    const dish = useSelector(state => state.dish)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadDish())
    }, [])

    return (
        <>
            {dish.loading == "pending" && (
                <div className="flex-col container justify-center items-center ">
                    
                    <div className="relative top-40 mx-auto text-center text-gray-400 font-serif text-8xl">Загрузка...</div>
                    <img className="static container" src="/content/load.gif" ></img>
                </div>
            )}


            {dish.loading == "fulfilled" && (
                <div className="mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
                    {dish.items.map((item) => (
                        <DishCard item={item} />
                    ))}
                </div>
            )}

            {dish.loading == "rejected" && (
                <div className="flex flex-col justify-center items-center ">
                    <div className="relative top-20 text-6xl text-yellow-400 " >! 200</div>
                    <img className="static container mx-auto px-20 " src="/content/error.gif"></img>
                </div>

            )}

        </>
    );
};

export default Menu;