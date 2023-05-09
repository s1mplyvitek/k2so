import { Link } from "react-router-dom";


const MainMenu = () => {
    let menuItems = [
        {title: "Главная", link: "/"},    
        {title: "О нас", link: "/about"},
        {title: "Отзывы", link: "/revies"},
        {title: "Про Буузы", link: "/buuzas"},
    ];
    return (
        <div className="flex gap-6">
            {menuItems.map((item) => (
                <Link to={item.link}>{item.title}</Link>
            ))}
        </div>
    );
};


export default MainMenu;