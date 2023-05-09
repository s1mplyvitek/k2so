import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import Menu from "../components/Menu";
import ContactsPage from "../pages/ContactsPage";
import MenuItem from "../pages/MenuItemPage";
import MenuItemPage from "../pages/MenuItemPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Menu /> },
            {
                path: "/catalog/:id",
                element: <MenuItemPage/>,
            },
            {
                path: "about",
                element: <Outlet />,
                children: [ 
                    {
                            path: "",
                            element: <AboutPage />,
                    },                   
                    {
                        path: "contacts",
                        element: <ContactsPage />,
                    },
                ],
            },
        ],

    },
]);

export default router;