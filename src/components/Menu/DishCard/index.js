import style from './DishCard.module.css'

const DishCard = ({ item, onClickBuy = () => {} }) => {
    const ingridients = (
        <div className="text-2x1 text-center list-disc ">
            <p className="text-zinc-900 ">Ingridients:{item.ingridients.join(", ")}</p>
        </div>
    );

    return (
        <div class="rounded overflow-hidden shadow-lg bg-cyan-400 sm:bg-cyan-500 md:bg-cyan-600 lg:bg-cyan-700 xl:bg-cyan-800 ">
            <img src={item.image} className="object-cover h-60 w-full" />
            <div className="p-2">
                <div className={`text-3xl font-bold text-center text-zinc-900 ${style.test}`}>{item.name}</div>
                <div className="p-2 text-xl">{ingridients}</div>
                <button onClick={() => onClickBuy(item)} class="w-full bg-transparent hover:bg-blue-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Buy
                </button>
            </div>
        </div>
    );
};

export default DishCard;