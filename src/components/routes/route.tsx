import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../../App";
import {Error404} from "../pages/Error404";
import {Adidas} from "../pages/Adidas";
import {Puma} from "../pages/Puma";
import {Abibas} from "../pages/Abibas";
import {Model} from "../pages/Model";
import {Prices} from "../pages/Prices";
import {ProtectedPage} from "../pages/ProtectedPage";
import {ProtectedRoute} from "../hoc/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/adidas" />,
            },
            {
                path: "/adidas",
                element: <Adidas/>,
            },
            {
                path: "/puma",
                element: <Puma/>,
            },
            {
                path: "/abibas",
                element: <Abibas/>,
            },
            {
                path: "/error",
                element: <Error404/>
            },
            {
                path: "*",
                element: <Error404/>
            },
            {
                path: '/:company/:id',
                element: <Model/>,
            },
            {
                path: "/prices",
                element: <Prices/>,
            },
            {
                path: "/protectedPage",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>),
            },
        ],
    },
]);