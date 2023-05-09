import { useParams } from "react-router-dom";
import dish from "../../fake/menu";


const OneMenu = () => {
    const { id } = useParams();
    let itemDish = dish.find((item) => item.id == 1)
    return (
        <div>
            <h1 className="text-4xl">{itemDish.name}</h1>
            <p className="text-xl container">Позы – блюдо, приготовленное из теста, мяса и зелени. Об авторстве это кушанья ходит много легенд.<br></br> Азиатские эксперты утверждают, что название произошло от китайского слова «баоцзы», что в народе стало произноситься как «бууза».<br></br> В России идут споры о том, что позы (буузы) являются исконно бурятским, а рецепт был придуман кочевниками.<br></br> Блюдо по способу приготовления и рецептуре схоже с мантами и кавказскими хинкали.</p>
            <img src={itemDish.image}></img>
            <p>{itemDish.ingridients.join(", ")}</p>
        </div>
    );
};

export default OneMenu;