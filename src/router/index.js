import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import Menu from "../components/Menu";
import ContactsPage from "../pages/ContactsPage";
import MenuItem from "../pages/MenuItemPage";
import MenuItemPage from "../pages/MenuItemPage";
import ReviesPage from "../pages/ReviesPage";
import OneMenu from "../pages/OneMenu";

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
            {
                path: "revies", 
                element: <ReviesPage />,
            },
            {
                path: "buuzas",
                element: <OneMenu />,
            },
        ],

    },
]);

export default router;