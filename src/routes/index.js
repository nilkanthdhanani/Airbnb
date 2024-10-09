import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import Wishlist from "../components/wishlist";
import Login from "../components/login";
import YourHome from "../modules/yourHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/wishlists",
                element: <Wishlist />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/yourhome",
                element: <YourHome />
            },
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;