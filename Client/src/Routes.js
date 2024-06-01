import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import ProductList from "./Pages/Product/Components/ProductList";
import Contacts from "./Pages/Contacts/Contacts";
import App from "./App";
import NotFound from "./Shared/NotFound";
import ProductInfo from "./Pages/Product/Components/ProductInfo";
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register";
import ManageProduct from "./Pages/Product/Components/manage Movies/ManageProduct";
import AddProduct from "./Pages/Product/Components/manage Movies/AddProduct";
import UpdateProduct from "./Pages/Product/Components/manage Movies/UpdateProduct";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "",
                element: <ProductList />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contacts />,
            },
            {
                path: '/product-info/:id',
                element: <ProductInfo />,
            },
            {
                path: '/manage-movies',
                children:[
                    {
                        path: "",
                        element: <ManageProduct />,
                    },
                    {
                        path: "add",
                        element: <AddProduct />,
                    },
                    {
                        path: "update",
                        element: <UpdateProduct />,
                    },
                ]
                
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },  
            //error not found page
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    },
]);