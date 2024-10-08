import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import Wishlist from "../common/wishlist";
import Login from "../common/login";

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
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;