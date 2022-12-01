import React from 'react';
import './styles/App.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/posts",
        element: <Posts/>,
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
